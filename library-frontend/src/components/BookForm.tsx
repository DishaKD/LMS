import { useState } from "react";
import type { CreateBookDto, Book } from "../types/Book";

interface Props {
  defaultValues?: Book;
  onSubmit: (data: CreateBookDto) => void;
}

export default function BookForm({ defaultValues, onSubmit }: Props) {
  const [form, setForm] = useState({
    title: defaultValues?.title || "",
    author: defaultValues?.author || "",
    description: defaultValues?.description || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow max-w-xl"
    >
      <label className="block mb-3">
        <span className="font-medium">Title</span>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1"
          required
        />
      </label>

      <label className="block mb-3">
        <span className="font-medium">Author</span>
        <input
          type="text"
          name="author"
          value={form.author}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1"
          required
        />
      </label>

      <label className="block mb-3">
        <span className="font-medium">Description</span>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1"
          required
        ></textarea>
      </label>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg mt-4"
      >
        Save
      </button>
    </form>
  );
}
