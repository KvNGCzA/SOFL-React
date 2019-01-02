import { toastr } from 'react-redux-toastr';
import { GET_PROFILE_QUESTIONS_SUCCESS, GET_PROFILE_QUESTIONS_FAILURE } from './actionTypes';
import { globalLoading } from './globalActions';

const getUserQuestionsSuccess = questions => ({
  type: GET_PROFILE_QUESTIONS_SUCCESS,
  questions,
  errors: ''
});

const getUserQuestionsFailure = errors => ({
  type: GET_PROFILE_QUESTIONS_FAILURE,
  errors,
  questions: []
});

const userQuestionAction = username => dispatch => fetch(`${process.env.API_BASE_URL}/questions/${username}/questions`)
  .then(res => res.json())
  .then((response) => {
    if (response.status === 200) {
      dispatch(getUserQuestionsSuccess(response.questions));
      return dispatch(globalLoading(false));
    }
    dispatch(getUserQuestionsFailure(response.message));
    dispatch(globalLoading(false));
    return toastr.error(response.message);
  });

export default userQuestionAction;
