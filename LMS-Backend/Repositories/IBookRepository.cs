namespace LMS_Backend.Repositories;

using LMS_Backend.Models;

public interface IBookRepository
{
    Task<List<Book>> GetAllAsync();
    Task<Book?> GetByIdAsync(int id);
    Task AddAsync(Book book);
    void Update(Book book);
    void Delete(Book book);
    Task SaveChangesAsync();
}
