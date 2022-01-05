import { connect } from 'react-redux';
import Transition from 'src/components/Transition';

const mapStateToProps = (state) => ({
  leaving: state.settings.leaving,
});

const mapDispatchToProps = (dispatch) => ({
 //
});

export default connect(mapStateToProps, mapDispatchToProps)(Transition);