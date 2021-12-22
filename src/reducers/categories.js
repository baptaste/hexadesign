export const initialState = {
  categories: [],
  category: '',
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_ALL_CATEGORIES_SUCCESS':
      return {
        ...state,
        categories: action.categories,
      }
    case 'GET_ALL_CATEGORIES_ERROR':
      return {
        ...state,
        categories: [],
      }
    default:
      return state;
   };
}

export default reducer;