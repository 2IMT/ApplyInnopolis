using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;

using ApplyInnopolisAPI.Models;

namespace ApplyInnopolisAPI.Api;

[ApiController]
[Route("api/tests/removeTest")]
public class RemoveTest : Controller
{
    private readonly ApplicationContext mDb;

    public RemoveTest(ApplicationContext db)
    {
        mDb = db;
    }

    [HttpDelete]
    public IActionResult OnPost([FromQuery] int id)
    {
        try
        {
            TestModel? test = mDb.Tests.FirstOrDefault(t => t.Id == id);
            
            if (test == null)
                throw new Exception("Test with given id doesn't exist");
            
            mDb.Remove(test);
            mDb.SaveChanges();

            return new ContentResult()
            {
                Content = JsonConvert.SerializeObject(new Result(){ Successful = true }),
                ContentType = "application/json"
            };
        }
        catch (Exception exception)
        {
            return new ContentResult()
            {
                Content = JsonConvert.SerializeObject(new Result(){ Successful = false, Error = exception.Message}),
                ContentType = "application/json"
            };
        }
    }

    private class Result
    {
        public bool Successful { get; set; }
        public string? Error { get; set; }
    }
}