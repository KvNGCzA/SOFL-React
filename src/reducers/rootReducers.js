import { combineReducers } from 'redux';
import { reducer as toastr } from 'react-redux-toastr';
import sidebar from './sidebarReducer';
import home from './homeReducer';
import global from './globalReducer';
import user from './userReducer';
import searchResults from './searchReducer';
import postQuestionReducer from './postQuestionReducer';

const rootReducer = combineReducers({
  toastr,
  global,
  user,
  home,
  sidebar,
  searchResults,
  postQuestion: postQuestionReducer
});

export default rootReducer;
