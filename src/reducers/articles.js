export const initialState = {
  articles: [],
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_ARTICLES_SUCCESS':
      return {
        ...state,
        articles: action.articles,
      }
    case 'GET_ARTICLES_ERROR':
      return {
        ...state,
        articles: [],
      }
    default:
      return state;
   };
}

export default reducer;