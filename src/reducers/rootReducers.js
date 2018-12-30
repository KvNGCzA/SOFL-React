import { combineReducers } from 'redux';
import sidebar from './sidebarReducer';
import home from './homeReducer';

const rootReducer = combineReducers({
  home,
  sidebar
});

export default rootReducer;
