using Microsoft.EntityFrameworkCore;

using ApplyInnopolisAPI.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

string connection =
    "Host=127.0.0.1;Port=5432;Database=ApplyInnopolis;Username=applyinnopolisapi;Password=e7Y8F0H9sa3cdvMcBGvW";

builder.Services.AddDbContext<ApplicationContext>(options => options.UseNpgsql(connection));

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        policy =>
        {
            policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
        });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();