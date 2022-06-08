import { v4 as uuidv4 } from 'uuid';

const ADDBOOK = 'ADDBOOK';
const REMOVEBOOK = 'REMOVEBOOK';

export const add = (payload) => ({
  type: ADDBOOK,
  payload,
});

export const remove = (payload) => ({
  type: REMOVEBOOK,
  payload,
});

const initialState = [
  {
    id: uuidv4(),
    title: 'Harry Potter',
    author: 'J. K. Rowling',
  },
  {
    id: uuidv4(),
    title: 'Think Big',
    author: 'Mark Luther',
  },
  {
    id: uuidv4(),
    title: 'World War 3',
    author: 'Vladimir Putin',
  },
];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDBOOK:
      return [...state, action.payload];
    case REMOVEBOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
