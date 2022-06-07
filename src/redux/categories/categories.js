const CHECKSTATUS = 'CHECKSTATUS';

export const checkStatus = (payload) => ({
  type: CHECKSTATUS,
  payload,
});

const initialState = [];

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKSTATUS:
      return [...state, 'Under construction'];
    default:
      return state;
  }
};

export default categoriesReducer;
