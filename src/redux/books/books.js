import Axios from 'axios';

const ADDBOOK = 'ADDBOOK';
const REMOVEBOOK = 'REMOVEBOOK';
const GETBOOKS = 'GETBOOKS';

const URL = 'http://localhost:3001/api/v1';
const endPoint = `${URL}/books/`;

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
  const mapBooks = Object.entries(books.data).map(([_data, booksArray]) => {
    console.log(_data);
    return booksArray;
  });
  dispatch(getAll(mapBooks));
};

export const addBook = (payload) => async (dispatch) => {
  const {
    title, author, description, chapters, category, imageUrl,
  } = payload;
  const currentUser = {
    id: 1,
    name: 'Yasin',
    profile: 'https://cdn4.iconfinder.com/data/icons/success-fil...',
    created_at: '2022-10-27 14:29:28.752079000 +0000',
    updated_at: '2022-10-27 14:29:28.752079000 +0000',
    email: 'yasin.elsharawi23@gmail.com',
    jti: '15ec434c-37d1-49b8-9225-e2edee5368ed',
  };
  const newBook = {
    title,
    author,
    description,
    category,
    chapters,
    image_url: imageUrl,
    user: currentUser,
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
