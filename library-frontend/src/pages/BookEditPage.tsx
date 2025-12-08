import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookForm from "../components/BookForm";
import type { Book } from "../types/Book";
import type { CreateBookDto } from "../types/Book";
import bookService from "../api/bookService";

export default function BookEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    bookService.getBookById(Number(id)).then((res) => setBook(res));
  }, [id]);

  const handleSubmit = async (data: CreateBookDto) => {
    if (!book) return;
    const updatedBook: Book = {
      ...book,
      ...data,
    };
    await bookService.updateBook(Number(id), updatedBook);
    navigate("/");
  };

  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Edit Book</h1>
      <BookForm defaultValues={book} onSubmit={handleSubmit} />
    </div>
  );
}
