using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;

using ApplyInnopolisAPI.Models;

namespace ApplyInnopolisAPI.Api;

[ApiController]
[Route("api/tests/addQuestion")]
public class AddQuestion : Controller
{
    private readonly ApplicationContext mDb;

    public AddQuestion(ApplicationContext db)
    {
        mDb = db;
    }

    [HttpPost]
    public IActionResult OnPost([FromBody] AddQuestionRequest request)
    {
        try
        {
            TestModel? test = mDb.Tests.FirstOrDefault(t => t.Id == request.TestId);
            
            if (test == null)
                throw new Exception("Test with given id doesn't exist");

            TestQuestionModel question = new()
            {
                Test = test,
                Name = request.Name,
                Text = request.Text,
                Answer = request.Answer
            };
            
            mDb.Add(question);
            mDb.SaveChanges();

            return new ContentResult()
            {
                Content = JsonConvert.SerializeObject(new Result(){ Successful = true, Id = question.Id }),
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

    public class AddQuestionRequest
    {
        public int TestId { get; set; }
        public string Name { get; set; } = null!;
        public string Text { get; set; } = null!;
        public string Answer { get; set; } = null!;
    }

    private class Result
    {
        public bool Successful { get; set; }
        public int? Id { get; set; }
        public string? Error { get; set; }
    }
}