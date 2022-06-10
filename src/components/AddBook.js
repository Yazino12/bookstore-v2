import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      const newBook = {
        id: uuidv4(),
        title,
        author,
        category: 'Action',
      };
      dispatch(addBook(newBook));
      setTitle('');
      setAuthor('');
    } else {
      alert('Please enter a valid text');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h3 className="formHeading">ADD NEW BOOK</h3>
      <div className="inputs">
        <input
          type="text"
          className="titleInput"
          placeholder="Book title"
          value={title}
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="authorInput"
          placeholder="Author"
          value={author}
          name="author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button className="input-submit" type="submit">
          ADD BOOK
        </button>
      </div>
    </form>
  );
};

export default AddBook;
