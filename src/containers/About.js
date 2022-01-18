import { connect } from 'react-redux';
import About from 'src/components/About';

const mapStateToProps = (state) => ({
  articles: state.articles.articles,
  prevPath: state.settings.prevPath,
  menuOpen: state.settings.menuOpen,
});

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => {
    dispatch({ type: 'GET_ARTICLES' })
  },
  setPrevPath: (path) => {
    dispatch({ type: 'SET_PREVIOUS_PATH', path })
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(About);