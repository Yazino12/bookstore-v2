import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Navbar from './Navbar';
import BookList from './BookList';
import AddBook from './AddBook';
import Сategories from '../pages/Categories';

const BookStore = () => {
  const [books, setBooks] = useState([
    {
      id: uuidv4(),
      title: 'Harry Potter',
      author: 'J. K. Rowling',
    },
  ]);

  const addBook = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    setBooks([...books, newBook]);
  };

  return (
    <div className="main">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={(
            <div className="bookStore">
              <BookList books={books} />
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
