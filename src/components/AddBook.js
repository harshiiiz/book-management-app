import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import BookForm from './BookForm';
import BooksContext from '../context/BooksContext';

const AddBook = () => {
  const { books, setBooks } = useContext(BooksContext);
  const navigate = useNavigate();
  const handleOnSubmit = (book) => {
    setBooks([book, ...books]);//displaying latest added book and then other books
    navigate('/');//Then once the book is added to local storage by calling the setBooks method, inside the handleOnSubmit method we're redirecting the user to the Books List page using navigate:
  };

  return (
    <React.Fragment>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddBook;