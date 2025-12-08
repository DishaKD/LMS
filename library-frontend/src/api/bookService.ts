// services/bookService.ts
import axiosInstance from "./axiosInstance";
import type { Book, CreateBookDto } from "../types/Book";

const bookService = {
  // Get all books
  getAllBooks: async (): Promise<Book[]> => {
    const response = await axiosInstance.get<Book[]>("/Books");
    return response.data;
  },

  // Get a single book by id
  getBookById: async (id: number): Promise<Book> => {
    const response = await axiosInstance.get<Book>(`/Books/${id}`);
    return response.data;
  },

  // Create a new book
  createBook: async (data: CreateBookDto): Promise<Book> => {
    const response = await axiosInstance.post<Book>("/Books", data);
    return response.data;
  },

  // Update a book
  updateBook: async (
    id: number,
    data: Partial<CreateBookDto>
  ): Promise<Book> => {
    const response = await axiosInstance.put<Book>(`/Books/${id}`, data);
    return response.data;
  },

  // Delete a book
  deleteBook: async (id: number): Promise<void> => {
    await axiosInstance.delete(`/Books/${id}`);
  },
};

export default bookService;
