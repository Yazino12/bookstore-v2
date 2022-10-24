import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { NavLink } from 'react-router-dom';
import 'react-circular-progressbar/dist/styles.css';
import RemoveBook from './RemoveBook';
import '../index.css';

function Book(props) {
  const { book } = props;
  const { title, author, id } = book;

  const percentage = 66;

  return (
    <div className="book">
      <div className="left">
        <div className="heading">
          <NavLink
            to="/show-book"
            key={id}
            state={book}
            className="bookTitle"
            exact="true"
          >
            {title}
          </NavLink>
          <p className="bookAuthor">{author}</p>
        </div>
        <div className="interactions">
          <button type="submit">Comments</button>
          <div className="v-line-small" />
          <RemoveBook bookID={id} />
          <div className="v-line-small" />
          <button type="submit">Edit</button>
        </div>
      </div>
      <div className="middle">
        <div className="progress">
          <CircularProgressbar
            value={percentage}
            styles={buildStyles({
              pathColor: 'rgb(2, 144, 255)',
            })}
          />
        </div>
        <div className="percentage">
          <h4>66%</h4>
          <span>Completed</span>
        </div>
      </div>
      <div className="v-line-big" />
      <div className="right">
        <div className="upper">
          <span>CURRENT CHAPTER</span>
          <p>Chapter 17</p>
        </div>
        <button type="button" className="update-progress">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Book;
