import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [chapters, setChapters] = useState('');
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      title.trim()
      && author.trim()
      && description.trim()
      && category.trim()
      && imageUrl.trim()
    ) {
      const newBook = {
        // id: uuidv4(),
        title,
        author,
        description,
        category,
        chapters,
        imageUrl,
      };
      dispatch(addBook(newBook));
      setTitle('');
      setAuthor('');
      setDescription('');
      setChapters('');
      setCategory('');
      setImageUrl('');
    } else {
      alert('Please enter a valid text');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h3 className="formHeading">ADD NEW BOOK</h3>
      <div className="inputs">
        <div className="firstInputs">
          <input
            type="text"
            className="titleInput"
            placeholder="Book title"
            value={title}
            name="title"
            required="true"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="authorInput"
            placeholder="Author"
            value={author}
            name="author"
            required="true"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="description">
          <textarea
            type="text"
            className="descriptionInput"
            placeholder="Description"
            value={description}
            name="description"
            required="true"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="lastInputs">
          <input
            type="text"
            className="categoryInput"
            placeholder="Category"
            value={category}
            name="category"
            required="true"
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="number"
            className="chaptersInput"
            placeholder="Chapters"
            value={chapters}
            name="chapters"
            required="true"
            onChange={(e) => setChapters(e.target.value)}
          />
          <input
            type="text"
            className="imageUrlInput"
            placeholder="Image Link"
            value={imageUrl}
            name="imageUrl"
            required="true"
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        <button className="input-submit" type="submit">
          ADD BOOK
        </button>
      </div>
    </form>
  );
};

export default AddBook;
