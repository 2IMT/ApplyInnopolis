using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;

using ApplyInnopolisAPI.Models;

namespace ApplyInnopolisAPI.Api;

[ApiController]
[Route("api/tests/getTests")]
public class GetTests : Controller
{
    private readonly ApplicationContext mDb;

    public GetTests(ApplicationContext db)
    {
        mDb = db;
    }

    [HttpGet]
    public IActionResult OnGet()
    {
        TestModel[] tests = mDb.Tests.ToArray();
        
        return new ContentResult()
        {
            Content = JsonConvert.SerializeObject(new Result(){ Tests = tests }),
            ContentType = "application/json"
        };
    }

    private class Result
    {
        public TestModel[] Tests { get; set; } = Array.Empty<TestModel>();
    }
}