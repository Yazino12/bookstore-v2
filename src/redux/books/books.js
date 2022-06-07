const ADDBOOK = 'ADDBOOK';
const REMOVEBOOK = 'REMOVEBOOK';

export const addBook = (payload) => ({
  type: ADDBOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVEBOOK,
  payload,
});

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDBOOK:
      return [...state, action.payload];
    case REMOVEBOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default booksReducer;
