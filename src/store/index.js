import { createStore, applyMiddleware , compose} from 'redux'
import reducer from 'src/reducers'
import categoriesMiddleware from 'src/middlewares/categoriesMiddleware'
import projectsMiddleware from 'src/middlewares/projectsMiddleware'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware (
    categoriesMiddleware,
    projectsMiddleware,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
