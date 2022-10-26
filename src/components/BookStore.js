import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, NavLink } from 'react-router-dom';
import { getBooks } from '../redux/books/books';
import Navbar from './Navbar';
import BookList from './BookList';
import Сategories from '../pages/Categories';
import AddBook from '../pages/AddBook';
import ShowBook from '../pages/ShowBook';

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
          element={(
            <div className="bookStore">
              <BookList books={books} />
              <hr />
              <NavLink to="/add-book" className="add-book-button" exact="true">
                ADD BOOK
              </NavLink>
            </div>
          )}
        />
        <Route path="categories" element={<Сategories />} />
        <Route path="add-book" element={<AddBook />} />
        <Route path="show-book" element={<ShowBook />} />
      </Routes>
    </div>
  );
};

export default BookStore;
