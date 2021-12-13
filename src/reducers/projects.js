export const initialState = {
  allProjects: [],
  categoryProjects: [],
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_ALL_PROJECTS_SUCCESS':
      return {
        ...state,
        allProjects: action.allProjects,
      }
    case 'GET_ALL_PROJECTS_ERROR':
      return {
        ...state,
        allProjects: [],
      }
    case 'CLEAR_PROJECTS':
      return {
        ...state,
        allProjects: [],
      }
    case 'GET_CATEGORY_PROJECTS_SUCCESS':
      return {
        ...state,
        categoryProjects: action.categoryProjects,
      }
    case 'GET_CATEGORY_PROJECTS_ERROR':
      return {
        ...state,
        categoryProjects: [],
      }
    default:
      return state;
   };
}

export default reducer;