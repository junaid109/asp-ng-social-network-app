using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using SocialApp.API.Data;

namespace SocialApp.API.Controllers
{
    [Route("api/[controller]")]
    [EnableCors(PolicyName = "AllowAll")]
    [Produces("application/json")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly AppDataContext DataContext;

        public ValuesController(AppDataContext dataContext)
        {
            DataContext = dataContext;
        }

        // GET api/values
        [HttpGet]
        public IActionResult GetValues()
        {
            var listValues = DataContext.Values.ToList();

            return Ok(listValues);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult GetValue(int id)
        {
            var value = DataContext.Values.First(c => c.Id == id);

            return Ok(value);
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody] string value)
        {
            var valueToAdd = DataContext.Add(value);

            return Ok(valueToAdd);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
