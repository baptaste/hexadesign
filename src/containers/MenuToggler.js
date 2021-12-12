import { connect } from 'react-redux';
import MenuToggler from 'src/components/MenuToggler';

const mapStateToProps = (state) => ({
  menuOpen: state.settings.menuOpen,
});

const mapDispatchToProps = (dispatch) => ({
  toggleMenuOpen: () => {
    dispatch({ type: 'SET_MENU_OPEN' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuToggler);