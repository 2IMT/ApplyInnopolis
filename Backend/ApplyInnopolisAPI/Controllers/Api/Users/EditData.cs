using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;

using ApplyInnopolisAPI.Models;
using Microsoft.IdentityModel.Tokens;

namespace ApplyInnopolisAPI.Api;

[ApiController]
[Route("api/users/editData")]
public class EditData : Controller
{
    private readonly ApplicationContext mDb;

    public EditData(ApplicationContext db)
    {
        mDb = db;
    }

    [HttpPost]
    public IActionResult OnPost([FromBody] EditDataRequest request)
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
            catch
            {
                throw new Exception("Auth token is invalid");
            }
        
            var jwt = tokenHandler.ReadToken(token) as JwtSecurityToken;
            int id =  Int32.Parse(jwt!.Claims.First(c => c.Type == "Id").Value);

            UserModel user = mDb.Users.First(u => u.Id == id);

            user.FirstName = request.FirstName;
            user.LastName = request.LastName;
            user.Patronymic = request.Patronymic;
            user.Email = request.Email;
            user.ContactPhone = request.ContactPhone;
            user.Citizenship = request.Citizenship;
            user.Country = request.Country;
            user.City = request.City;
            user.BirthDate = request.BirthDate;

            mDb.SaveChanges();

            return new ContentResult()
            {
                Content = JsonConvert.SerializeObject(new Result() { Successful = true }),
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

    public class EditDataRequest
    {
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string? Patronymic { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string ContactPhone { get; set; } = null!;
        public string Citizenship { get; set; } = null!;
        public string City { get; set; } = null!;
        public string Country { get; set; } = null!;
        public DateOnly BirthDate { get; set; }
    }

    private class Result
    {
        public bool Successful { get; set; }
        public string? Error { get; set; }
    }
}