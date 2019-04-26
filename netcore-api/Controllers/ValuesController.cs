using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace netcore_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        string fileName = "/home/fcrozetta/projetos/beta/nomes.txt";
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            System.IO.StreamReader sr = new System.IO.StreamReader(fileName);
            return sr.ReadToEnd().ToString().Split('\n');
        }


        // POST api/values
        [HttpPost]
        public void Post([FromBody] Dictionary<string,string> req)
        {
            System.IO.File.AppendAllText(fileName,$"{req["name"]}{Environment.NewLine}");
        }

    }
}
