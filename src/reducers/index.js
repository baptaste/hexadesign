import { combineReducers } from 'redux';

import projectsReducer from './projects';
import settingsReducer from './settings';

const rootReducer = combineReducers({
  projects: projectsReducer,
  settings: settingsReducer,
});

export default rootReducer;
