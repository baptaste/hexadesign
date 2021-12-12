import { connect } from 'react-redux';
import App from 'src/components/App';

const mapStateToProps = (state) => ({
  // menuOpen: state.settings.menuOpen,
  // category: state.settings.category,
});

const mapDispatchToProps = (dispatch) => ({
  getAllProjects: () => {
    dispatch({ type: 'GET_ALL_PROJECTS' })
  }
  // toggleMenuOpen: () => {
  //   dispatch({ type: 'SET_MENU_OPEN' });
  // },
  // clearCategory: () => {
  //   dispatch({ type: 'CLEAR_CATEGORY' })
  // }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);