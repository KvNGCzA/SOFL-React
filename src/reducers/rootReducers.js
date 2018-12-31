import { combineReducers } from 'redux';
import { reducer as toastr } from 'react-redux-toastr';
import sidebar from './sidebarReducer';
import home from './homeReducer';
import global from './globalReducer';
import user from './userReducer';
import searchResults from './searchReducer';

const rootReducer = combineReducers({
  toastr,
  global,
  user,
  home,
  sidebar,
  searchResults
});

export default rootReducer;
