namespace ApplyInnopolisAPI.Models;

public class UserModel
{
    public int Id { get; set; }
    
    public string Password { get; set; } = null!;

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string? Patronymic { get; set; }
    
    public DateOnly? BirthDate { get; set; }

    public string Email { get; set; } = null!;

    public string ContactPhone { get; set; } = null!;

    public string? Country { get; set; }

    public string? City { get; set; }

    public string Citizenship { get; set; } = null!;

    public string? Source { get; set; }
}