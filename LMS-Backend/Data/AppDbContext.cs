
namespace LMS_Backend.Data;

using Microsoft.EntityFrameworkCore;
using LMS_Backend.Models;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<Book> Books => Set<Book>();

    public override int SaveChanges()
    {
        foreach (var entry in ChangeTracker.Entries<Book>())
        {
            if (entry.State == EntityState.Added)
            {
                entry.Entity.CreatedAt = DateTime.UtcNow;
            }

            entry.Entity.UpdatedAt = DateTime.UtcNow;
        }

        return base.SaveChanges();
    }
}
