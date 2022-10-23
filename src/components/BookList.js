import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function BookList(props) {
  let { books } = props;
  books.map((book) => {
    books = book;
  });
  return (
    <div className="bookList">
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default BookList;
