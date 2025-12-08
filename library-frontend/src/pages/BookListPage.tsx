import { useEffect, useState } from "react";
import bookService from "../api/bookService";
import type { Book } from "../types/Book";
import { Link } from "react-router-dom";

export default function BookListPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = async () => {
    const res = await bookService.getAllBooks();
    setBooks(res);
    setLoading(false);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this book?")) return;

    await bookService.deleteBook(id);
    fetchBooks();
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchBooks();
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Library Books</h1>
        <Link
          to="/books/create"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          + Add Book
        </Link>
      </div>

      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <table className="w-full bg-white shadow rounded-lg">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Author</th>
              <th className="p-3 text-left">Description</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((b) => (
              <tr key={b.id} className="border-b">
                <td className="p-3">{b.title}</td>
                <td className="p-3">{b.author}</td>
                <td className="p-3">{b.description}</td>
                <td className="p-3 text-center">
                  <Link
                    to={`/books/edit/${b.id}`}
                    className="px-3 py-1 bg-yellow-500 text-white rounded mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(b.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
