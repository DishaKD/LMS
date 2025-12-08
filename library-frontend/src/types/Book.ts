// types/Book.ts

// Represents a Book entity returned from backend
export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  createdAt: string; // Dates from backend usually come as ISO strings
  updatedAt: string;
}

// DTO for creating a new book (frontend -> backend)
export interface CreateBookDto {
  title: string;
  author: string;
  description: string;
}
