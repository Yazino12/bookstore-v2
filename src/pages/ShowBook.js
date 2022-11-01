import React from 'react';
import { useLocation } from 'react-router-dom';

const ShowBook = () => {
  const location = useLocation();
  const { state } = location;
  const {
    title,
    author,
    image_url: imageURL,
    description,
    category,
    chapters,
  } = state;
  //   let { books } = props;
  //   books.map((book) => {
  //     books = book;
  //     return book;
  //   });

  return (
    <div className="showBook">
      <div className="showBook-header">
        <div className="showBook-header-image">
          <img src={imageURL} alt="Book" width={200} height={250} />
        </div>
        <div className="showBook-header-title">
          <h1 className="title">{title}</h1>
          <p>{author}</p>
        </div>
      </div>
      <div className="showBook-body">
        <div className="showBook-body-description">
          <p className="description">{description}</p>
        </div>
        <div className="showBook-body-details">
          <p className="details">
            Category:
            <span>
              {' '}
              {category}
            </span>
          </p>
          <p className="details">
            Chapters:
            <span>
              {' '}
              {chapters}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowBook;
