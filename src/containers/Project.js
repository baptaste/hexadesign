import { connect } from 'react-redux';
import Project from 'src/components/Project';

const mapStateToProps = (state) => ({
  project: state.projects.project,
});

const mapDispatchToProps = (dispatch) => ({
   getProject: (id) => {
    dispatch({ type: 'GET_PROJECT', id })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Project);