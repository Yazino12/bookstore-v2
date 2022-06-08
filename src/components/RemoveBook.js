import React from 'react';
import PropTypes from 'prop-types';

const RemoveBook = (props) => {
  const { bookID, removeBook } = props;

  const onClick = () => {
    removeBook(bookID);
  };

  return (
    <button type="submit" onClick={onClick}>
      Remove
    </button>
  );
};

RemoveBook.propTypes = {
  bookID: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default RemoveBook;
