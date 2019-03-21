using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using SocialApp.API.Data;
using SocialApp.API.Helpers;
using SocialApp.API.Models;

namespace SocialApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class PhotosController : ControllerBase
    {
        private readonly ISocialRepository _socialRepository;

        private readonly IMapper _mapper;

        private readonly IOptions<CloudinarySettings> _options;

        private Cloudinary _cloudinary;

        public PhotosController(ISocialRepository socialRepository, IMapper mapper, IOptions<CloudinarySettings> options)
        {
            _socialRepository = socialRepository;
            _options = options;
            mapper = _mapper;

            Account acc = new Account
            {
                Cloud = _options.Value.CloudName,
                ApiKey = _options.Value.ApiKey,
                ApiSecret = _options.Value.ApiSecret
            };

            var _cloudinary = new Cloudinary(acc);

        }

        [HttpPost]
        public async Task<IActionResult> AddPhotoForUser(int userId, PhotoForCreationDto photoForCreationDto)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }

            var userFromRepo = await _socialRepository.GetUser(userId);

            var file = photoForCreationDto.File;

            var uploadResult = new ImageUploadResult();

            if(file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    var uploadParams = new ImageUploadParams()
                    {
                        File = new FileDescription(file.Name, stream),
                        Transformation = new Transformation().Width(500).Height(500).Crop("fill").Gravity("face")
                    };

                    uploadResult = _cloudinary.Upload(uploadParams);
                }
            }

            photoForCreationDto.Url = uploadResult.Uri.ToString();
            photoForCreationDto.PublicId = uploadResult.PublicId;

            var photo = _mapper.Map<Photo>(photoForCreationDto);

            if(!userFromRepo.Photos.Any(p => p.IsMainPhoto))
            {
                photo.IsMainPhoto = true;
            }

            userFromRepo.Photos.Add(photo);

            if(await _socialRepository.SaveAll())
            {
                return Ok();
            }

            return BadRequest("Could not add a photo");
        }
    }
}