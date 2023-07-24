using System.Security.Cryptography;

using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;

using ApplyInnopolisAPI.Models;

namespace ApplyInnopolisAPI.Api;

[ApiController]
[Route("api/users/authorize")]
public class Authorize : Controller
{
    private readonly ApplicationContext mDb;

    public Authorize(ApplicationContext db)
    {
        mDb = db;
    }

    [HttpPost]
    public IActionResult OnPost([FromBody] AuthorizeRequest request)
    {
        try
        {
            UserModel? user = mDb.Users.FirstOrDefault(u => u.Email == request.Login | u.ContactPhone == request.Login);
            if (user == null)
                throw new Exception("Wrong credentials");

            byte[] salt = user.PasswordHashSalt;
            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: request.Password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA256,
                iterationCount: 100000,
                numBytesRequested: 256 / 8));
            if (user.Password != hashed)
                throw new Exception("Wrong credentials");

            string token = user.GenerateToken();
            
            return new ContentResult()
            {
                Content = JsonConvert.SerializeObject(new Result(){ Successful = true, Token = token }),
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

    public class AuthorizeRequest
    {
        public string Login { get; set; } = null!;
        public string Password { get; set; } = null!;
    }

    private class Result
    {
        public bool Successful { get; set; }
        public string? Token { get; set; }
        public string? Error { get; set; }
    }
}