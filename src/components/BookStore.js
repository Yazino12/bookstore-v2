import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { add, remove } from '../redux/books/books';
import Navbar from './Navbar';
import BookList from './BookList';
import AddBook from './AddBook';
import Сategories from '../pages/Categories';

const BookStore = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const addBook = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };

    dispatch(add(newBook));
  };

  const removeBook = (bookID) => {
    dispatch(remove(bookID));
  };

  return (
    <div className="main">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={(
            <div className="bookStore">
              <BookList books={books} removeBook={removeBook} />
              <AddBook addBookProps={addBook} />
            </div>
          )}
        />
        <Route path="categories" element={<Сategories />} />
      </Routes>
    </div>
  );
};

export default BookStore;
