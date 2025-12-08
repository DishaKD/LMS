using Scalar.AspNetCore;
using Microsoft.EntityFrameworkCore;
using LMS_Backend.Data;
using LMS_Backend.Repositories;
using LMS_Backend.Services;

var builder = WebApplication.CreateBuilder(args);

// ✅ Required for controllers to appear in OpenAPI
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddControllers(); // ← ADD THIS LINE

// ✅ Enables OpenAPI document generation
builder.Services.AddOpenApi();

// Database context
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

// Services & Repositories
builder.Services.AddScoped<IBookRepository, BookRepository>();
builder.Services.AddScoped<IBookService, BookService>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy =>
        {
            policy.WithOrigins("http://localhost:5173") // frontend URL
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

var app = builder.Build();

app.UseCors("AllowFrontend");


if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.MapScalarApiReference(); // Serves Scalar UI at /
}

app.UseHttpsRedirection();

// ✅ Maps your BooksController (required for attribute-routed controllers)
app.MapControllers();

// Initialize the database
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.Migrate();
}

app.Run();
