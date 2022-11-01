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
          <h1>{title}</h1>
          <p>{author}</p>
        </div>
      </div>
      <div className="showBook-body">
        <div className="showBook-body-description">
          <p>{description}</p>
        </div>
        <div className="showBook-body-details">
          <p>
            Category:
            {category}
          </p>
          <p>
            Chapters:
            {chapters}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowBook;
