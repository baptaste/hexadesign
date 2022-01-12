import { connect } from 'react-redux';
import List from 'src/components/List';

const mapStateToProps = (state) => ({
  category: state.categories.category,
  allProjects: state.projects.allProjects,
  projects: state.projects.projects,
  filteredProjects: state.projects.filteredProjects,
  loading: state.settings.loading,
  themes: state.projects.themes,
  categories: state.categories.categories,
  projectInfoRevealed: state.projects.projectInfoRevealed,
  infoIdRevealed: state.projects.infoIdRevealed,
  allSliderPreviewsRevealed: state.projects.allSliderPreviewsRevealed,
  menuOpen: state.settings.menuOpen,
});

const mapDispatchToProps = (dispatch) => ({
  getCategoryProjects: () => {
    dispatch({ type: 'GET_CATEGORY_PROJECTS' });
  },
  revealProjectInfo: (imgId) => {
    dispatch({ type: 'REVEAL_PROJECT_INFO', imgId })
  },
  hideProjectInfo: () => {
    dispatch({ type: 'HIDE_PROJECT_INFO' })
  },
  getProjectId: (projectId) => {
    dispatch({ type: 'GET_PROJECT_ID', projectId })
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(List);