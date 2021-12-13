import { combineReducers } from 'redux';

import categoriesReducer from './categories';
import projectsReducer from './projects';
import settingsReducer from './settings';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  projects: projectsReducer,
  settings: settingsReducer,
});

export default rootReducer;
