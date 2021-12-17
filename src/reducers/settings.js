export const initialState = {
  menuOpen: false,
  baitActive: false,
  navLinkHovered: false,
  navImgSrc: '',
  loading: false,
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_MENU_OPEN':
      return {
        ...state,
        menuOpen: !state.menuOpen,
      }
    case 'TOGGLE_NAV_BAIT':
      return {
        ...state,
        baitActive: !state.baitActive,
      }
    case 'REVEAL_NAVLINK_IMG':
      return {
        ...state,
        navLinkHovered: !state.navLinkHovered,
        navImgSrc: action.image,
      }
    case 'HIDE_NAVLINK_IMG':
      return {
        ...state,
        navLinkHovered: false,
        // navImgSrc: '',
      }
    case 'GET_ALL_PROJECTS_SUCCESS':
      return { ...state, loading: false }
    case 'GET_ALL_PROJECTS_ERROR':
      return { ...state, loading: false }
    case 'GET_CATEGORY_PROJECTS_SUCCESS':
      return { ...state, loading: false }
    case 'GET_CATEGORY_PROJECTS_ERROR':
      return { ...state, loading: false }
    case 'GET_ALL_CATEGORIES_SUCCESS':
      return { ...state, loading: false }
    case 'GET_ALL_CATEGORIES_ERROR':
      return { ...state, loading: false }
    default:
      return state;
   };
}

export default reducer;