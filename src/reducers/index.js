import { combineReducers } from 'redux';

import categoriesReducer from './categories';
import projectsReducer from './projects';
import settingsReducer from './settings';
import articlesReducer from './articles';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  projects: projectsReducer,
  settings: settingsReducer,
  articles: articlesReducer,
});

export default rootReducer;
