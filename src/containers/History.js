import { connect } from 'react-redux';
import History from 'src/components/History';

const mapStateToProps = (state) => ({
  menuOpen: state.settings.menuOpen,
  category: state.categories.category,
});

const mapDispatchToProps = (dispatch) => ({
  toggleMenuOpen: () => {
    dispatch({ type: 'SET_MENU_OPEN' });
  },
  clearCategory: () => {
    dispatch({ type: 'CLEAR_CATEGORY' })
  },
  clearProjects: () => {
    dispatch({ type: 'CLEAR_PROJECTS' })
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(History);