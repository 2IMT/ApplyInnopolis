namespace ApplyInnopolisAPI.Models;

public class TestQuestionModel
{
    public int Id { get; set; }
    
    public TestModel Test { get; set; } = null!;
    
    public string Name { get; set; } = null!;

    public string Text { get; set; } = null!;

    public string Answer { get; set; } = null!;
}