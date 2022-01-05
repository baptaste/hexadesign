import { connect } from 'react-redux';
import About from 'src/components/About';

const mapStateToProps = (state) => ({
  prevPath: state.settings.prevPath,
});

const mapDispatchToProps = (dispatch) => ({
  setPrevPath: (path) => {
    dispatch({ type: 'SET_PREVIOUS_PATH', path })
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(About);