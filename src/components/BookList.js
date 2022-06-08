import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function BookList(props) {
  const { books, removeBook } = props;
  return (
    <div className="bookList">
      {books.map((book) => (
        <Book key={book.id} book={book} removeBook={removeBook} />
      ))}
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default BookList;
