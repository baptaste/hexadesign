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
    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.category,
      }
    case 'CLEAR_CATEGORY':
      return {
        ...state,
        category: '',
      }
    default:
      return state;
   };
}

export default reducer;