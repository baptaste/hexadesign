import { connect } from 'react-redux';
import App from 'src/components/App';

// const mapStateToProps = (state) => ({

// });

const mapDispatchToProps = (dispatch) => ({
  getAllCategories: () => {
    dispatch({ type: 'GET_ALL_CATEGORIES' })
  },
  getAllProjects: () => {
    dispatch({ type: 'GET_ALL_PROJECTS' })
  },
});

export default connect(null, mapDispatchToProps)(App);