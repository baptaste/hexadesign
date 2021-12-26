import { connect } from 'react-redux';
import Transition from 'src/components/Transition';

const mapStateToProps = (state) => ({
  // entering: state.settings.entering,
  leaving: state.settings.leaving,
});

const mapDispatchToProps = (dispatch) => ({
  //  getProject: (id) => {
  //   dispatch({ type: 'GET_PROJECT', id })
  // }
});

export default connect(mapStateToProps, mapDispatchToProps)(Transition);