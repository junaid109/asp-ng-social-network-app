using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SocialApp.API.Data;
using System.Reflection;

namespace SocialApp.API
{
    public class Startup
    {
        private readonly IHostingEnvironment _environment;

        public IConfiguration Configuration { get; }


        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var connectionString = Configuration["ConnectionStrings:SocialAppDBString"];
            services.AddDbContext<AppDataContext>(o => o.UseSqlServer(connectionString));

            if(_environment.IsDevelopment())
            {
                // Add Cors policy for cross-origin resource sharing
                services.AddCors(options =>
                {
                    options.AddPolicy("AllowAll", p =>
                    {
                        p.AllowAnyOrigin()
                        .AllowAnyHeader()
                        .AllowCredentials()
                        .AllowAnyMethod();
                    });
                });

                services.AddSwaggerGen(c =>
                {
                    c.SwaggerDoc("v1", new Swashbuckle.AspNetCore.Swagger.Info
                    {
                        Title = Configuration["Swagger:Url"],
                        Version = Configuration["Swagger:Name"],
                        Description = "API to retrieve Social App Data",
                    });
                });

                services.ConfigureSwaggerGen(options =>
                {
                    // Get the filename of the autodoc xml file
                    var basePath = Microsoft.DotNet.PlatformAbstractions.ApplicationEnvironment.ApplicationBasePath;
                    string assemblyQualifiedName = Assembly.GetExecutingAssembly().GetName().Name;
                    string xmlDocFilename = System.IO.Path.Combine(basePath, $"{assemblyQualifiedName}.xml");
                    // Check the file exists
                    if (System.IO.File.Exists(xmlDocFilename))
                    {
                        options.IncludeXmlComments(xmlDocFilename);
                    }
                });
            }

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();

                // Enable middleware to serve generated Swagger as a JSON endpoint
                app.UseSwagger();

                // Enable middleware to serve swagger-ui assets (HTML, JS, CSS etc.)
                app.UseSwaggerUI(c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "API V1");
                    c.RoutePrefix = string.Empty;
                });

                // Enable cors with specified policy
                app.UseCors("AllowAll");
            }
            else
            {
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
