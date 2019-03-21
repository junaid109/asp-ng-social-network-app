using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SocialApp.API.Data
{
    public class PhotoForCreationDto
    {
        public string Url { get; set; }

        public IFormFile File { get; set; }

        public DateTime DateAdded { get; set; }

        public string PublicId { get; set; }

        public PhotoForCreationDto()
        {
            DateAdded = DateTime.Now;
        }
    }
}
