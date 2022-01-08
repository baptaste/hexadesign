import { connect } from 'react-redux';
import Home from 'src/components/Home';

const mapStateToProps = (state) => ({
  //
});

const mapDispatchToProps = (dispatch) => ({
  toggleMenuOpen: () => {
    dispatch({ type: 'SET_MENU_OPEN' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);