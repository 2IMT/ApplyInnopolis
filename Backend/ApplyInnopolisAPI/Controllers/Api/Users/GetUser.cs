using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;

using ApplyInnopolisAPI.Models;
using Microsoft.IdentityModel.Tokens;

namespace ApplyInnopolisAPI.Api;

[ApiController]
[Route("api/users/getUser")]
public class GetUser : Controller
{
    private readonly ApplicationContext mDb;

    public GetUser(ApplicationContext db)
    {
        mDb = db;
    }

    [HttpGet]
    public IActionResult OnGet()
    {
        try
        {
            if (!Request.Headers.ContainsKey("Auth"))
                throw new Exception("No auth token supplied");
        
            string token = Request.Headers["Auth"]!;
        
            var tokenHandler = new JwtSecurityTokenHandler();
            try
            {
                tokenHandler.ValidateToken(token, new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(":hF@P:H:j5wpiwLC@~T@U!HECuF_pnhn=deT%+,t82e4cLn2=WJa_9R>=Q}_"))
                }, out SecurityToken validatedToken);
            }
            catch (Exception e)
            {
                throw new Exception("Auth token is invalid " + e.Message);
            }
        
            var jwt = tokenHandler.ReadToken(token) as JwtSecurityToken;
            int id =  Int32.Parse(jwt!.Claims.First(c => c.Type == "Id").Value);

            UserModel user = mDb.Users.First(u => u.Id == id);

            return new ContentResult()
            {
                Content = JsonConvert.SerializeObject(new Result()
                {
                    Id = user.Id,
                    Email = user.Email,
                    ContactPhone = user.ContactPhone,
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Patronymic = user.Patronymic,
                    BirthDate = user.BirthDate,
                    Country = user.Country,
                    City = user.City,
                    Citizenship = user.Citizenship,
                    Source = user.Source
                }),
                ContentType = "application/json"
            };
        }
        catch (Exception exception)
        {
            return new ContentResult()
            {
                Content = JsonConvert.SerializeObject(new Result(){ Error = exception.Message }),
                ContentType = "application/json"
            };
        }
    }

    private class Result
    {
        public int? Id { get; set; }
        public string? FirstName { get; set; } = null!;
        public string? LastName { get; set; } = null!;
        public string? Patronymic { get; set; }
        public DateOnly? BirthDate { get; set; }
        public string? Email { get; set; } = null!;
        public string? ContactPhone { get; set; } = null!;
        public string? Country { get; set; }
        public string? City { get; set; }
        public string? Citizenship { get; set; } = null!;
        public string? Source { get; set; }
        public string? Error { get; set; }
    }
}