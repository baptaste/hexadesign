import { connect } from 'react-redux';
import App from 'src/components/App';

const mapStateToProps = (state) => ({
  // menuOpen: state.settings.menuOpen,
  // category: state.settings.category,
});

const mapDispatchToProps = (dispatch) => ({
  getAllCategories: () => {
    dispatch({ type: 'GET_ALL_CATEGORIES' })
  },
  getAllProjects: () => {
    dispatch({ type: 'GET_ALL_PROJECTS' })
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);