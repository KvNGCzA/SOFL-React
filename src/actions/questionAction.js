import { toastr } from 'react-redux-toastr';

import { globalFailure, globalLoading } from './globalActions';
import { GET_SINGLE_QUESTION_SUCCESS, GET_SINGLE_QUESTION_FAILURE } from './actionTypes';

export const singleQuestionSuccess = (question, comments) => ({
  type: GET_SINGLE_QUESTION_SUCCESS,
  question,
  comments,
  errors: '',
});

export const singleQuestionFailure = errors => ({
  type: GET_SINGLE_QUESTION_FAILURE,
  question: {},
  comments: [],
  errors,
});

const questionAction = questionId => dispatch => fetch(`${process.env.API_BASE_URL}/questions/${questionId}`)
  .then(
    res => res.json(),
    (error) => {
      dispatch(globalFailure(['An error has occured', error]));
      toastr.error('An error has occured, please try again!');
    }
  )
  .then((response) => {
    if (response.status !== 200) {
      dispatch(globalLoading(false));
      return dispatch(singleQuestionFailure(response.message));
    }
    dispatch(globalLoading(false));
    return dispatch(singleQuestionSuccess(response.question[0], response.answers));
  });

export default questionAction;
