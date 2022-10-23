import React from 'react';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// import { removeBook } from '../redux/books/books';

const RemoveBook = (props) => {
  // const dispatch = useDispatch();
  const { bookID } = props;
  console.log(bookID);

  const onClick = () => {
    // dispatch(removeBook(bookID));
  };

  return (
    <button type="submit" onClick={onClick}>
      Remove
    </button>
  );
};

RemoveBook.propTypes = {
  bookID: PropTypes.string.isRequired,
};

export default RemoveBook;
