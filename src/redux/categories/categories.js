const CHECKSTATUS = 'CHECKSTATUS';

export const checkStatus = () => ({
  type: CHECKSTATUS,
});

const initialState = [];

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKSTATUS:
      return ['Under construction'];
    default:
      return state;
  }
};

export default categoriesReducer;
