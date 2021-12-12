export const initialState = {
  projects: [],
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_ALL_PROJECTS_SUCCESS':
      return {
        ...state,
        projects: action.projects,
      }
    case 'GET_ALL_PROJECTS_ERROR':
      return {
        ...state,
        projects: [],
      }
    case 'CLEAR_PROJECTS':
      return {
        ...state,
        projects: [],
      }
    default:
      return state;
   };
}

export default reducer;