import { connect } from 'react-redux';
import Nav from 'src/components/Nav';

const mapStateToProps = (state) => ({
  menuOpen: state.settings.menuOpen,
  navLinkHovered: state.settings.navLinkHovered,
  navImgSrc: state.settings.navImgSrc,
});

const mapDispatchToProps = (dispatch) => ({
  toggleMenuOpen: () => {
    dispatch({ type: 'SET_MENU_OPEN' });
  },
  revealNavLinkImg: (image) => {
    dispatch({ type: 'REVEAL_NAVLINK_IMG', image })
  },
  hideNavLinkImg: () => {
    dispatch({ type: 'HIDE_NAVLINK_IMG' })
  },
  setCategory: (category) => {
    dispatch({ type: 'SET_CATEGORY', category })
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);