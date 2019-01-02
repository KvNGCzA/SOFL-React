import initialState from '../store/initialState';
import { GET_PROFILE_QUESTIONS_SUCCESS, GET_PROFILE_QUESTIONS_FAILURE } from '../actions/actionTypes';

const { profileQuestion } = initialState;
const profileQuestionReducer = (state = profileQuestion, action) => {
  const { type } = action;
  switch (type) {
    case GET_PROFILE_QUESTIONS_SUCCESS:
    case GET_PROFILE_QUESTIONS_FAILURE:
      return {
        ...state,
        questions: action.questions,
        errors: action.errors
      };
    default:
      return state;
  }
};

export default profileQuestionReducer;
