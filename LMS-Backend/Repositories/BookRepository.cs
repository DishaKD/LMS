namespace LMS_Backend.Repositories;

using LMS_Backend.Data;
using LMS_Backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
public class BookRepository : IBookRepository
{
    private readonly AppDbContext _context;

    public BookRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<List<Book>> GetAllAsync() =>
        await _context.Books.ToListAsync();

    public async Task<Book?> GetByIdAsync(int id) =>
        await _context.Books.FirstOrDefaultAsync(x => x.Id == id);

    public async Task AddAsync(Book book) =>
        await _context.Books.AddAsync(book);

    public void Update(Book book) =>
        _context.Books.Update(book);

    public void Delete(Book book) =>
        _context.Books.Remove(book);

    public async Task SaveChangesAsync() =>
        await _context.SaveChangesAsync();
}
