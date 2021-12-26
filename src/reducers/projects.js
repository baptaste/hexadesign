export const initialState = {
  allProjects: [],
  projects: [],
  filteredProjects: [],
  themes: [],
  filteredTheme: '',
  infoIdRevealed: null,
  firstProject: null,
  allSliderPreviewsRevealed: false,
  // projectId: null,
  project: null,
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
        projects: action.projects,
        allSliderPreviewsRevealed: false,
      }
    case 'GET_CATEGORY_PROJECTS_ERROR':
      return {
        ...state,
        projects: [],
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
    case 'GET_FILTERED_PROJECTS':
      return {
        ...state,
        filteredProjects: state.projects.filter((project) => project.attributes.themes.data[0].attributes.name === action.theme),
        filteredTheme: action.theme,
      }
    case 'CLEAR_FILTERED_PROJECTS':
     return {
       ...state,
       filteredProjects: [],
       filteredTheme: '',
     }
    // case 'GET_PROJECT_ID': {
    //   console.log('GET_PROJECT_ID window.location.pathname : ', window.location.pathname)
    //   return {
    //     ...state,
    //     projectId: action.projectId,
    //   }
    // }
    case 'GET_PROJECT_SUCCESS':
      return {
        ...state,
        project: action.project,
      }
    case 'GET_PROJECT_ERROR':
      return {
        ...state,
        project: null,
      }
    default:
      return state;
   };
}

export default reducer;