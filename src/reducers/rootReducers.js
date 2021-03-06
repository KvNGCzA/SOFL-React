import { combineReducers } from 'redux';
import { reducer as toastr } from 'react-redux-toastr';
import sidebar from './sidebarReducer';
import home from './homeReducer';
import global from './globalReducer';
import user from './userReducer';
import searchResults from './searchReducer';
import postQuestionReducer from './postQuestionReducer';
import profileReducer from './profileReducer';
import profileQuestionReducer from './profileQuestionReducer';
import questionReducer from './questionReducer';
import commentReducer from './commentReducer';

const rootReducer = combineReducers({
  toastr,
  global,
  user,
  home,
  sidebar,
  searchResults,
  postQuestion: postQuestionReducer,
  profile: profileReducer,
  profileQuestion: profileQuestionReducer,
  singleQuestion: questionReducer,
  currentComment: commentReducer
});

export default rootReducer;
