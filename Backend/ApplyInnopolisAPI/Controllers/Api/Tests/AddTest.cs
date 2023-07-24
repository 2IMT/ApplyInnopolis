using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;

using ApplyInnopolisAPI.Models;

namespace ApplyInnopolisAPI.Api;

[ApiController]
[Route("api/tests/addTest")]
public class AddTest : Controller
{
    private readonly ApplicationContext mDb;

    public AddTest(ApplicationContext db)
    {
        mDb = db;
    }

    [HttpPost]
    public IActionResult OnPost([FromBody] AddTestRequest request)
    {
        try
        {
            if (mDb.Tests.FirstOrDefault(t => t.Name == request.Name) != null)
                throw new Exception("Test with this name already exists");

            TestModel test = new() { Name = request.Name, Time = request.Time, Attempts = request.Attempts};
            mDb.Add(test);
            mDb.SaveChanges();

            return new ContentResult()
            {
                Content = JsonConvert.SerializeObject(new Result(){ Successful = true, Id = test.Id}),
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

    public class AddTestRequest
    {
        public string Name { get; set; } = null!;
        public uint Time { get; set; }
        public uint Attempts { get; set; }
    }

    private class Result
    {
        public bool Successful { get; set; }
        public int? Id { get; set; }
        public string? Error { get; set; }
    }
}
    