export const initialState = {
  menuOpen: false,
  navLinkHovered: false,
  navImgSrc: null,
  category: '',
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_MENU_OPEN':
      return {
        ...state,
        menuOpen: !state.menuOpen,
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
        navImgSrc: null,
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