import { connect } from 'react-redux';
import Showcase from 'src/components/Showcase';

const mapStateToProps = (state) => ({
  showcaseProjectHover: state.projects.showcaseProjectHover,
  showcaseProjectId: state.projects.showcaseProjectId,
  allProjects: state.projects.allProjects
});

const mapDispatchToProps = (dispatch) => ({
  setShowcaseProjectHover: (id) => {
    dispatch({ type: 'SET_SHOWCASE_PROJECT_HOVER', id })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Showcase);