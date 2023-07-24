namespace ApplyInnopolisAPI.Models;

public class TestModel
{
    public int Id { get; set; }
    
    public string Name { get; set; } = null!;

    public uint Time { get; set; }
    
    public uint Attempts { get; set; }
}