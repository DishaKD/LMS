namespace LMS_Backend.DTOs;

public class BookCreateDto
{
    public required string Title { get; set; }
    public required string Author { get; set; }
    public required string Description { get; set; }
}