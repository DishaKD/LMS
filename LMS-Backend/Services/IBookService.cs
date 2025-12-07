namespace LMS_Backend.Services;
 
 using LMS_Backend.Models;
 using LMS_Backend.DTOs;

public interface IBookService
{
    Task<List<Book>> GetAllAsync();
    Task<Book?> GetByIdAsync(int id);
    Task<Book> CreateAsync(BookCreateDto dto);
    Task<Book?> UpdateAsync(int id, BookUpdateDto dto);
    Task<bool> DeleteAsync(int id);
}
