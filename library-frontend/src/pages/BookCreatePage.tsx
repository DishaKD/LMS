import BookForm from "../components/BookForm";
import type { CreateBookDto } from "../types/Book";
import bookService from "../api/bookService";
import { useNavigate } from "react-router-dom";

export default function BookCreatePage() {
  const navigate = useNavigate();

  const handleSubmit = async (data: CreateBookDto) => {
    await bookService.createBook(data);
    navigate("/");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add New Book</h1>
      <BookForm onSubmit={handleSubmit} />
    </div>
  );
}
