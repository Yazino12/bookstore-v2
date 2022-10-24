import React from 'react';
import { useLocation } from 'react-router-dom';

const ShowBook = () => {
  const location = useLocation();
  const { state } = location;
  const {
    id,
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
      <h1>{id}</h1>
      <h1>{title}</h1>
      <h1>{author}</h1>
      <img src={imageURL} alt="Book" width={200} height={250} />
      <p>{description}</p>
      <p>{category}</p>
      <h1>{chapters}</h1>
    </div>
  );
};

export default ShowBook;
