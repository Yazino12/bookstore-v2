import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddBook = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
    author: '',
  });

  const { addBookProps } = props;

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim() && inputText.author.trim()) {
      addBookProps(inputText.title, inputText.author);
      setInputText({
        title: '',
        author: '',
      });
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
          value={inputText.title}
          name="title"
          onChange={onChange}
        />
        <input
          type="text"
          className="authorInput"
          placeholder="Author"
          value={inputText.author}
          name="author"
          onChange={onChange}
        />
        <button className="input-submit" type="submit">
          ADD BOOK
        </button>
      </div>
    </form>
  );
};

AddBook.propTypes = {
  addBookProps: PropTypes.func.isRequired,
};

export default AddBook;
