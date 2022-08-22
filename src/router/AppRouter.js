import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import AddBook from "../components/AddBook";
import BooksList from "../components/BooksList";
import useLocalStorage from "../hooks/useLocalStorage";
import EditBook from "../components/EditBook";
import BooksContext from '../context/BooksContext';

const AppRouter = () => {
  const [books, setBooks] = useLocalStorage("books", []);
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
        <BooksContext.Provider value={{ books, setBooks }}>
          <Routes>
            <Route
              element={<BooksList />}
              path="/"
              exact="true"
            />
            <Route
              element={<AddBook  />}
              path="/add"
            />
            <Route
              element={<EditBook />}
              path="/edit/:id"
            />
            
          </Routes>
          </BooksContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
