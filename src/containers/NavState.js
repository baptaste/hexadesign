import { connect } from 'react-redux';
import NavState from 'src/components/NavState';

const mapStateToProps = (state) => ({
  scrollValue: state.settings.scrollValue,
});

const mapDispatchToProps = (dispatch) => ({
  setScrollValue: (value) => {
    dispatch({ type: 'SET_SCROLL_VALUE', value });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavState);