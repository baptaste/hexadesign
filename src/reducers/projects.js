export const initialState = {
  allProjects: [],
  categoryProjects: [],
  themes: [],
  infoIdRevealed: null,
  firstProject: null,
  allSliderPreviewsRevealed: false,
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
    // case 'CLEAR_PROJECTS':
    //   return {
    //     ...state,
    //     allProjects: [],
    //   }
    case 'GET_CATEGORY_PROJECTS_SUCCESS':
      return {
        ...state,
        categoryProjects: action.categoryProjects,
        allSliderPreviewsRevealed: false,
      }
    case 'GET_CATEGORY_PROJECTS_ERROR':
      return {
        ...state,
        categoryProjects: [],
      }
    case 'GET_ALL_THEMES_SUCCESS':
      return {
        ...state,
        themes: action.themes,
      }
    case 'GET_ALL_THEMES_ERROR':
      return {
        ...state,
        themes: [],
      }
    case 'REVEAL_PROJECT_INFO':
      return {
        ...state,
        infoIdRevealed: action.imgId,
      }
    case 'HIDE_PROJECT_INFO':
      return {
        ...state,
        infoIdRevealed: state.firstProject,
      }
    case 'REVEAL_FIRST_PROJECT':
      return {
        ...state,
        firstProject: action.project.id,
        infoIdRevealed: action.project.id,
      }
    case 'REVEAL_ALL_SLIDER_PREVIEWS':
      return {
        ...state,
        allSliderPreviewsRevealed: true,
      }
    default:
      return state;
   };
}

export default reducer;