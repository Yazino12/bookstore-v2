import Axios from 'axios';

const ADDBOOK = 'ADDBOOK';
const REMOVEBOOK = 'REMOVEBOOK';
const GETBOOKS = 'GETBOOKS';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appID = 'rYBOCRslJogzaGetFty3';
const endPoint = `${URL}/apps/${appID}/books/`;

export const add = (payload) => ({
  type: ADDBOOK,
  payload,
});

export const remove = (payload) => ({
  type: REMOVEBOOK,
  payload,
});

export const getAll = (payload) => ({
  type: GETBOOKS,
  payload,
});

export const getBooks = () => async (dispatch) => {
  const books = await Axios.get(endPoint);
  const mapBooks = Object.entries(books.data).map(([id, book]) => {
    const { author, title } = book[0];
    return { id, author, title };
  });
  dispatch(getAll(mapBooks));
};

export const addBook = (payload) => async (dispatch) => {
  const {
    id, title, author, category,
  } = payload;
  const newBook = {
    item_id: id,
    title,
    author,
    category,
  };
  await Axios.post(endPoint, newBook);
  dispatch(add(payload));
};

export const removeBook = (bookID) => async (dispatch) => {
  await Axios.delete(`${endPoint}${bookID}`);
  dispatch(remove(bookID));
};

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case GETBOOKS:
      return action.payload;
    case ADDBOOK:
      return [...state, action.payload];
    case REMOVEBOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
