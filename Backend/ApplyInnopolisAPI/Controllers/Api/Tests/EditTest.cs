using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;

using ApplyInnopolisAPI.Models;

namespace ApplyInnopolisAPI.Api;

[ApiController]
[Route("api/tests/editTest")]
public class EditTest : Controller
{
    private readonly ApplicationContext mDb;

    public EditTest(ApplicationContext db)
    {
        mDb = db;
    }

    [HttpPost]
    public IActionResult OnPost([FromBody] EditTestRequest request)
    {
        try
        {
            TestModel? test = mDb.Tests.FirstOrDefault(t => t.Id == request.Id);
            
            if (test == null)
                throw new Exception("Test with given id doesn't exist");
            
            if (mDb.Tests.FirstOrDefault(t => t.Name == request.Name & t.Id != request.Id) != null)
                throw new Exception("Test with this name already exists");

            test.Name = request.Name;
            test.Time = request.Time;
            test.Attempts = request.Attempts;
            
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
    
    public class EditTestRequest
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public uint Time { get; set; }
        public uint Attempts { get; set; }
    }

    private class Result
    {
        public bool Successful { get; set; }
        public string? Error { get; set; }
    }
}