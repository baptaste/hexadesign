import { createStore, applyMiddleware, compose} from 'redux'
import reducer from 'src/reducers'
import categoriesMiddleware from 'src/middlewares/categoriesMiddleware'
import projectsMiddleware from 'src/middlewares/projectsMiddleware'
import themesMiddleware from 'src/middlewares/themesMiddleware'
import articlesMiddleware from 'src/middlewares/articlesMiddleware'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware (
    categoriesMiddleware,
    projectsMiddleware,
    themesMiddleware,
    articlesMiddleware,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
