using AutoMapper;
using SocialApp.API.Data;
using SocialApp.API.DTOs;
using SocialApp.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SocialApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>()
                .ForMember(dest => dest.PhotoUrl, opt =>
                {
                    opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMainPhoto).Url);
                })
                .ForMember(dest => dest.Age, opt =>
                {
                    opt.MapFrom(d => d.DateOfBirth.CalculateAge());
                });

            CreateMap<User, UserForDetailedDto>()
                     .ForMember(dest => dest.PhotoUrl, opt =>
                     {
                         opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMainPhoto).Url);
                     })
                     .ForMember(dest => dest.Age, opt =>
                     {
                         opt.MapFrom(d => d.DateOfBirth.CalculateAge());
                     });

            CreateMap<Photo, PhotosForDetailedDto>();

            CreateMap<UserForUpdateDto, User>();

            CreateMap<PhotoForCreationDto, PhotoForReturnDto>();

        }
    }
}
