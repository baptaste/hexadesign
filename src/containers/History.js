import { connect } from 'react-redux';
import History from 'src/components/History';

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  project: state.projects.project,
});

const mapDispatchToProps = (dispatch) => ({
  toggleMenuOpen: () => {
    dispatch({ type: 'SET_MENU_OPEN' });
  },
  clearCategory: () => {
    dispatch({ type: 'CLEAR_CATEGORY' })
  },
  setLeaving: () => {
    dispatch({ type: 'SET_LEAVING' })
  },
  endLeaving: () => {
    dispatch({ type: 'END_LEAVING' })
  }
  // clearProjects: () => {
  //   dispatch({ type: 'CLEAR_PROJECTS' })
  // },
});

export default connect(mapStateToProps, mapDispatchToProps)(History);