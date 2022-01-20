export const initialState = {
  categories: [],
  categoryPath: '',
  nextCategory: null,
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
    case 'SET_CURRENT_CATEGORY':
      return {
        ...state,
        categoryPath: action.path,
      }
    case 'SET_NEXT_CATEGORY':
      return {
        ...state,
        nextCategory: action.category,
      }
    default:
      return state;
   };
}

export default reducer;