import { connect } from 'react-redux';
import Project from 'src/components/Project';

const mapStateToProps = (state) => ({
  project: state.projects.project,
  projects: state.projects.projects,
  categoryPath: state.categories.categoryPath,
  nextProject: state.projects.nextProject,
  categories: state.categories.categories,
  currentProjectIndex: state.projects.currentProjectIndex,
  nextCategory: state.categories.nextCategory,
});

const mapDispatchToProps = (dispatch) => ({
   getProject: (id) => {
    dispatch({ type: 'GET_PROJECT', id })
  },
  setPrevPath: (path) => {
    dispatch({ type: 'SET_PREVIOUS_PATH', path })
  },
  setNextProject: (project) => {
    dispatch({ type: 'SET_NEXT_PROJECT', project })
  },
  clearNextProject: () => {
    dispatch({ type: 'CLEAR_NEXT_PROJECT' });
  },
  getCategoryProjects: () => {
    dispatch({ type: 'GET_CATEGORY_PROJECTS' });
  },
  setFoundIndex: (index) => {
    dispatch({ type: 'SET_CURRENT_PROJECT_INDEX', index })
  },
  setNextCategory: (category) => {
    dispatch({ type: 'SET_NEXT_CATEGORY', category })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Project);