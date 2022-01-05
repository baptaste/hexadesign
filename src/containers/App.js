import { connect } from 'react-redux';
import App from 'src/components/App';

const mapStateToProps = (state) => ({
  transitionActive: state.settings.transitionActive,
});

const mapDispatchToProps = (dispatch) => ({
  getAllCategories: () => {
    dispatch({ type: 'GET_ALL_CATEGORIES' })
  },
  getAllProjects: () => {
    dispatch({ type: 'GET_ALL_PROJECTS' })
  },
  getAllThemes: () => {
    dispatch({ type: 'GET_ALL_THEMES' })
  },
  setPrevPath: (path) => {
    dispatch({ type: 'SET_PREVIOUS_PATH', path })
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);