import React, { useContext } from "react";
import _ from "lodash";
import Book from "./Book";
import BooksContext from '../context/BooksContext';
const BooksList = () => {
  const { books, setBooks } = useContext(BooksContext);
  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id)); //Inside the handleRemoveBook function, we're calling the setBooks function by using the array filter method to keep only books that do not match with the provided book id.
  };

  return (
    <React.Fragment>
      <div className="book-list">
        {!_.isEmpty(books) ? (//if books not empty
          books.map((book) => (
            <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
          ))
        ) : (
          <p className="message">No books available. Please add some books.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default BooksList;
