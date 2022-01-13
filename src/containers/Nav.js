import { connect } from 'react-redux';
import Nav from 'src/components/Nav';

const mapStateToProps = (state) => ({
  menuOpen: state.settings.menuOpen,
  baitActive: state.settings.baitActive,
  navLinkHovered: state.settings.navLinkHovered,
  navImgSrc: state.settings.navImgSrc,
  categories: state.categories.categories,
  navLinkNumber: state.settings.navLinkNumber,
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
  revealNavLinkNumber: (id) => {
    dispatch({ type: 'REVEAL_NAVLINK_NUMBER', id });
  },
  hideNavLinkNumber: () => {
    dispatch({ type: 'HIDE_NAVLINK_NUMBER' })
  }
  // setCategory: (category) => {
  //   dispatch({ type: 'SET_CATEGORY', category });
  // },
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);