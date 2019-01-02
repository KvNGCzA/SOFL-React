import initialState from '../store/initialState';
import {
  POST_COMMENT_SUCCESS,
  POST_COMMENT_INPROGRESS
} from '../actions/actionTypes';

const { currentComment } = initialState;
const commentReducer = (state = currentComment, action) => {
  const { type } = action;
  switch (type) {
    case POST_COMMENT_SUCCESS:
    case POST_COMMENT_INPROGRESS:
      return {
        ...state, answer: action.answer, id: action.id
      };
    default:
      return state;
  }
};

export default commentReducer;
