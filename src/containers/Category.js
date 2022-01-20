import { connect } from 'react-redux';
import Category from 'src/components/Category';

const mapStateToProps = (state) => ({
  categoryPath: state.categories.categoryPath,
  allProjects: state.projects.allProjects,
  projects: state.projects.projects,
  filteredProjects: state.projects.filteredProjects,
  loading: state.settings.loading,
  themes: state.projects.themes,
  filteredTheme: state.projects.filteredTheme,
  categories: state.categories.categories,
  projectInfoRevealed: state.projects.projectInfoRevealed,
  infoIdRevealed: state.projects.infoIdRevealed,
  // allSliderPreviewsRevealed: state.projects.allSliderPreviewsRevealed,
  prevPath: state.settings.prevPath,
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
  revealAllSliderPreviews: () => {
    dispatch({ type: 'REVEAL_ALL_SLIDER_PREVIEWS' })
  },
  getFilteredProjects: (theme) => {
    dispatch({ type: 'GET_FILTERED_PROJECTS', theme })
  },
  clearFilteredProjects: () => {
    dispatch({ type: 'CLEAR_FILTERED_PROJECTS' })
  },
  setCurrentCategory: (path) => {
    dispatch({ type: 'SET_CURRENT_CATEGORY', path })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);