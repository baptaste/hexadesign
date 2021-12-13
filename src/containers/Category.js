import { connect } from 'react-redux';
import Category from 'src/components/Category';

const mapStateToProps = (state) => ({
  category: state.categories.category,
  allProjects: state.projects.allProjects,
  categoryProjects: state.projects.categoryProjects,
});

const mapDispatchToProps = (dispatch) => ({
  getCategoryProjects: () => {
    dispatch({ type: 'GET_CATEGORY_PROJECTS' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);