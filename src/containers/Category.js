import { connect } from 'react-redux';
import Category from 'src/components/Category';

const mapStateToProps = (state) => ({
  category: state.categories.category,
  allProjects: state.projects.allProjects,
  categoryProjects: state.projects.categoryProjects,
  loading: state.settings.loading,
  themes: state.projects.themes,
  categories: state.categories.categories,
  projectInfoRevealed: state.projects.projectInfoRevealed,
  infoIdRevealed: state.projects.infoIdRevealed,
  allSliderPreviewsRevealed: state.projects.allSliderPreviewsRevealed,
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);