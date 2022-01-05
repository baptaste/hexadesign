import { connect } from 'react-redux';
import Project from 'src/components/Project';

const mapStateToProps = (state) => ({
  project: state.projects.project,
});

const mapDispatchToProps = (dispatch) => ({
   getProject: (id) => {
    dispatch({ type: 'GET_PROJECT', id })
  },
  setPrevPath: (path) => {
    dispatch({ type: 'SET_PREVIOUS_PATH', path })
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Project);