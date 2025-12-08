import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookListPage from "./pages/BookListPage";
import BookCreatePage from "./pages/BookCreatePage";
import BookEditPage from "./pages/BookEditPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        <div className="max-w-5xl mx-auto py-8 px-4">
          <Routes>
            <Route path="/" element={<BookListPage />} />
            <Route path="/books/create" element={<BookCreatePage />} />
            <Route path="/books/edit/:id" element={<BookEditPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
