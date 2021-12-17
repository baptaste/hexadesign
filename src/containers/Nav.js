import { connect } from 'react-redux';
import Nav from 'src/components/Nav';

const mapStateToProps = (state) => ({
  menuOpen: state.settings.menuOpen,
  baitActive: state.settings.baitActive,
  navLinkHovered: state.settings.navLinkHovered,
  navImgSrc: state.settings.navImgSrc,
  categories: state.categories.categories,
});

const mapDispatchToProps = (dispatch) => ({
  toggleMenuOpen: () => {
    dispatch({ type: 'SET_MENU_OPEN' });
  },
  toggleNavBait: () => {
    dispatch({ type: 'TOGGLE_NAV_BAIT' });
  },
  revealNavLinkImg: (image) => {
    dispatch({ type: 'REVEAL_NAVLINK_IMG', image });
  },
  hideNavLinkImg: () => {
    dispatch({ type: 'HIDE_NAVLINK_IMG' });
  },
  setCategory: (category) => {
    dispatch({ type: 'SET_CATEGORY', category });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);