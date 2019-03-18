using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;
using SocialApp.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SocialApp.API.Data
{
    public class AppDataContext : DbContext
    {
        public AppDataContext(DbContextOptions<AppDataContext> options) 
            : base(options)
        {

        }

        public DbSet<Value> Values { get; set; }

        public DbSet<User> Users { get; set; }
    }
}
