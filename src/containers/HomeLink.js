import { connect } from 'react-redux';
import HomeLink from 'src/components/HomeLink';

const mapStateToProps = (state) => ({
  menuOpen: state.settings.menuOpen,
});

const mapDispatchToProps = (dispatch) => ({
  toggleMenuOpen: () => {
    dispatch({ type: 'SET_MENU_OPEN' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeLink);