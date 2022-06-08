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
  // const [books, setBooks] = useState([
  //   {
  //     id: uuidv4(),
  //     title: 'Harry Potter',
  //     author: 'J. K. Rowling',
  //   },
  // ]);

  const addBook = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    // setBooks([...books, newBook]);
    dispatch(add(newBook));
  };

  const removeBook = (bookID) => {
    // setBooks(books.filter((book) => book.id !== bookID));
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
