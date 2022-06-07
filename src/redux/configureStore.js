import Redux from 'react-redux';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = Redux.combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

export default Redux.createStore(rootReducer);
