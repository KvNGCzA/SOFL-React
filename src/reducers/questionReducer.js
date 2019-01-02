import initialState from '../store/initialState';
import {
  GET_SINGLE_QUESTION_SUCCESS,
  GET_SINGLE_QUESTION_FAILURE
} from '../actions/actionTypes';

const { singleQuestion } = initialState;
const questionReducer = (state = singleQuestion, action) => {
  const { type } = action;
  switch (type) {
    case GET_SINGLE_QUESTION_SUCCESS:
    case GET_SINGLE_QUESTION_FAILURE:
      return {
        ...state,
        question: action.question,
        comments: action.comments,
        errors: action.errors
      };
    default:
      return state;
  }
};

export default questionReducer;
