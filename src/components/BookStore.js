import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { getBooks } from '../redux/books/books';
import Navbar from './Navbar';
import BookList from './BookList';
import AddBook from './AddBook';
import Сategories from '../pages/Categories';

const BookStore = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div className="main">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="bookStore">
              <BookList books={books} />
              <hr />
              <AddBook />
            </div>
          }
        />
        <Route path="categories" element={<Сategories />} />
      </Routes>
    </div>
  );
};

export default BookStore;
