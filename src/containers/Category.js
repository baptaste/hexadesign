import { connect } from 'react-redux';
import Category from 'src/components/Category';

const mapStateToProps = (state) => ({
  menuOpen: state.settings.menuOpen,
  category: state.settings.category,
});

const mapDispatchToProps = (dispatch) => ({
  toggleMenuOpen: () => {
    dispatch({ type: 'SET_MENU_OPEN' });
  },
  clearCategory: () => {
    dispatch({ type: 'CLEAR_CATEGORY' })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);