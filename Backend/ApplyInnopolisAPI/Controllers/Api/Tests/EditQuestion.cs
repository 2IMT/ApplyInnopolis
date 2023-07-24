using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;

using ApplyInnopolisAPI.Models;

namespace ApplyInnopolisAPI.Api;

[ApiController]
[Route("api/tests/editQuestion")]
public class EditQuestion : Controller
{
    private readonly ApplicationContext mDb;

    public EditQuestion(ApplicationContext db)
    {
        mDb = db;
    }

    [HttpPost]
    public IActionResult OnPost([FromBody] EditQuestionRequest request)
    {
        try
        {
            TestQuestionModel? question = mDb.TestQuestions.FirstOrDefault(q => q.Id == request.Id);
            
            if (question == null)
                throw new Exception("Question with given id doesn't exist");
            
            if (mDb.TestQuestions.FirstOrDefault(q => q.Name == request.Name & q.Test.Id != question.Test.Id) != null)
                throw new Exception("Question with this name already exists in this Test");

            question.Name = request.Name;
            question.Text = request.Text;
            question.Answer = request.Answer;

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

    public class EditQuestionRequest
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Text { get; set; } = null!;
        public string Answer { get; set; } = null!;
    }

    private class Result
    {
        public bool Successful { get; set; }
        public string? Error { get; set; }
    }
}