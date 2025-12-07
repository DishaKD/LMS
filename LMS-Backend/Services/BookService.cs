namespace LMS_Backend.Services;
 
 using LMS_Backend.Models;
 using LMS_Backend.DTOs;
 using LMS_Backend.Repositories;

public class BookService : IBookService
{
    private readonly IBookRepository _repo;

    public BookService(IBookRepository repo)
    {
        _repo = repo;
    }

    public async Task<List<Book>> GetAllAsync() =>
        await _repo.GetAllAsync();

    public async Task<Book?> GetByIdAsync(int id) =>
        await _repo.GetByIdAsync(id);

    public async Task<Book> CreateAsync(BookCreateDto dto)
    {
        var book = new Book
        {
            Title = dto.Title,
            Author = dto.Author,
            Description = dto.Description
        };

        await _repo.AddAsync(book);
        await _repo.SaveChangesAsync();

        return book;
    }

    public async Task<Book?> UpdateAsync(int id, BookUpdateDto dto)
    {
        var existing = await _repo.GetByIdAsync(id);
        if (existing == null) return null;

        existing.Title = dto.Title;
        existing.Author = dto.Author;
        existing.Description = dto.Description;

        _repo.Update(existing);
        await _repo.SaveChangesAsync();

        return existing;
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var book = await _repo.GetByIdAsync(id);
        if (book == null) return false;

        _repo.Delete(book);
        await _repo.SaveChangesAsync();

        return true;
    }
}
