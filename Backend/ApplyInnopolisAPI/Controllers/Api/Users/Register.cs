using System.Security.Cryptography;

using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;

using ApplyInnopolisAPI.Models;

namespace ApplyInnopolisAPI.Api;

[ApiController]
[Route("api/users/register")]
public class Register : Controller
{
    private readonly ApplicationContext mDb;

    public Register(ApplicationContext db)
    {
        mDb = db;
    }

    [HttpPost]
    public IActionResult OnPost([FromBody] RegisterRequest request)
    {
        try
        {
            if (mDb.Users.FirstOrDefault(u => u.Email == request.Email |
                                              u.ContactPhone == request.ContactPhone) != null)
                throw new Exception("User with this email or phone number already exists");

            if (request.Password.Length < 8)
                throw new Exception("Password length should be at least 8 characters");

            int id = new Random().Next();
            while (mDb.Users.FirstOrDefault(u => u.Id == id) != null) id = new Random().Next();
            
            byte[] salt = RandomNumberGenerator.GetBytes(128 / 8);
            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: request.Password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA256,
                iterationCount: 100000,
                numBytesRequested: 256 / 8));
            
            UserModel user = new()
            {
                Id = id,
                Password = hashed,
                PasswordHashSalt = salt,
                FirstName = request.FirstName,
                LastName = request.LastName,
                Patronymic = request.Patronymic,
                Email = request.Email,
                ContactPhone = request.ContactPhone,
                Citizenship = request.Citizenship
            };

            mDb.Add(user);
            mDb.SaveChanges();

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

    public class RegisterRequest
    {
        public string Password { get; set; } = null!;
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string? Patronymic { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string ContactPhone { get; set; } = null!;
        public string Citizenship { get; set; } = null!;
    }

    private class Result
    {
        public bool Successful { get; set; }
        public string? Token { get; set; }
        public string? Error { get; set; }
    }
}