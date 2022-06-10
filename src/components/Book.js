import React from 'react';
import PropTypes from 'prop-types';
import RemoveBook from './RemoveBook';

function Book(props) {
  const {
    book: { title, author, id },
  } = props;
  return (
    <div className="book">
      <h3 className="bookTitle">{title}</h3>
      <p className="bookAuthor">{author}</p>
      <div className="interactions">
        <button type="submit">Comments</button>
        <RemoveBook bookID={id} />
        <button type="submit">Edit</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Book;
