﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SocialApp.API.Models
{
    public class Photo
    {
        public int Id { get; set; }

        public string Url { get; set; }

        public string Description { get; set; }

        public DateTime DateAdded { get; set; }

        public bool IsMainPhoto { get; set; }

        public string PublicId { get; set; }

        public User User { get; set; }

        public int UserId { get; set; }
    }
}
