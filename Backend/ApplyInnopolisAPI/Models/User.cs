using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

using Microsoft.IdentityModel.Tokens;

namespace ApplyInnopolisAPI.Models;

public class UserModel
{
    public int Id { get; set; }
    
    public string Password { get; set; } = null!;

    public byte[] PasswordHashSalt { get; set; } = Array.Empty<byte>();

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


    public string GenerateToken()
    {
        var securityKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(":hF@P:H:j5wpiwLC@~T@U!HECuF_pnhn=deT%+,t82e4cLn2=WJa_9R>=Q}_"));
        var tokenHandler = new JwtSecurityTokenHandler();
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new Claim[]
            {
                new Claim("Id", this.Id.ToString()),
            }),
            SigningCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256Signature)
        };
        var tokenObj = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(tokenObj);
    }
}