using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;

using ApplyInnopolisAPI.Models;

namespace ApplyInnopolisAPI.Api;

[ApiController]
[Route("api/tests/getTest")]
public class GetTest : Controller
{
    private readonly ApplicationContext mDb;

    public GetTest(ApplicationContext db)
    {
        mDb = db;
    }

    [HttpGet]
    public IActionResult OnGet([FromQuery] int id)
    {
        TestModel? test = mDb.Tests.FirstOrDefault(t => t.Id == id);
            
        if (test == null)
            throw new Exception("Test with given id doesn't exist");

        TestQuestionModel[] questions = mDb.TestQuestions.Where(q => q.Test.Id == test.Id).ToArray();

        foreach (var question in questions)
        {
            question.Answer = "";
        }
        
        return new ContentResult()
        {
            Content = JsonConvert.SerializeObject(new Result(){ Test = test, Questions = questions }),
            ContentType = "application/json"
        };
    }

    private class Result
    {
        public TestModel Test { get; set; } = null!;
        public TestQuestionModel[] Questions { get; set; } = null!;
    }
}