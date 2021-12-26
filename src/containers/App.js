import { connect } from 'react-redux';
import App from 'src/components/App';

const mapStateToProps = (state) => ({
//  categories: state.categories.categories,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(App);