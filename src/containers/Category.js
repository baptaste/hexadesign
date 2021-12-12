import { connect } from 'react-redux';
import Category from 'src/components/Category';

const mapStateToProps = (state) => ({
  category: state.settings.category,
  projects: state.projects.projects,
});

const mapDispatchToProps = (dispatch) => ({
 //
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);