using Microsoft.EntityFrameworkCore;

using ApplyInnopolisAPI.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

string? connection = builder.Configuration.GetConnectionString("DefaultConnection");
 
// добавляем контекст ApplicationContext в качестве сервиса в приложение
builder.Services.AddDbContext<ApplicationContext>(options => options.UseNpgsql(connection!));

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();