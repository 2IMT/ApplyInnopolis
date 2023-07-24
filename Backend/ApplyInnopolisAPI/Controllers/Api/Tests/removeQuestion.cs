using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;

using ApplyInnopolisAPI.Models;

namespace ApplyInnopolisAPI.Api;

[ApiController]
[Route("api/tests/removeQuestion")]
public class RemoveQuestion : Controller
{
    private readonly ApplicationContext mDb;

    public RemoveQuestion(ApplicationContext db)
    {
        mDb = db;
    }

    [HttpDelete]
    public IActionResult OnPost([FromQuery] int id)
    {
        try
        {
            TestQuestionModel? question = mDb.TestQuestions.FirstOrDefault(q => q.Id == id);
            
            if (question == null)
                throw new Exception("Question with given id doesn't exist");
            
            mDb.Remove(question);
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