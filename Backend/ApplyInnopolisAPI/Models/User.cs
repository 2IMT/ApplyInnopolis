namespace ApplyInnopolisAPI.Models;

public class UserModel
{
    public int Id { get; set; }

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string Patronymic { get; set; } = null!;
    
    public DateOnly BirthDate { get; set; }

    public string Email { get; set; } = null!;

    public string ContactPhone { get; set; } = null!;

    public string Country { get; set; } = null!;

    public string City { get; set; } = null!;

    public string Citizenship { get; set; } = null!;

    public string Source { get; set; } = null!;
}