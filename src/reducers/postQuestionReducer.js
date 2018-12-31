import initialState from '../store/initialState';
import {
  POST_QUESTION_FAILURE,
  POST_QUESTION_SUCCESS,
  POST_QUESTION_INPROGRESS
} from '../actions/actionTypes';

const { postQuestion } = initialState;
const homeReducer = (state = postQuestion, action) => {
  const { type, payload } = action;
  switch (type) {
    case POST_QUESTION_FAILURE:
    case POST_QUESTION_SUCCESS:
      return {
        ...state,
        title: action.title,
        content: action.content,
        tags: action.tags
      };
    case POST_QUESTION_INPROGRESS:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

export default homeReducer;
