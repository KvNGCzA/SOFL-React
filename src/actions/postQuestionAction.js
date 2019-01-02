import { toastr } from 'react-redux-toastr';

import { globalFailure, globalLoading } from './globalActions';
import { POST_QUESTION_SUCCESS, POST_QUESTION_INPROGRESS } from './actionTypes';
import requestOptions from '../utils/requestOptions';
import getToken from '../utils/getToken';

export const postQuestionSuccess = () => ({
  type: POST_QUESTION_SUCCESS,
  title: '',
  content: '',
  tags: '',
});

export const postQuestionInProgress = payload => ({
  type: POST_QUESTION_INPROGRESS,
  payload
});

const postQuestion = (questionBody, history) => dispatch => fetch(`${process.env.API_BASE_URL}/questions`, requestOptions(questionBody, 'POST', getToken()))
  .then(
    res => res.json(),
    (error) => {
      dispatch(globalFailure(['An error has occured', error]));
      toastr.error('An error has occured, please try again!');
    }
  )
  .then((response) => {
    dispatch(globalLoading(false));
    if (response.message !== 'question posted!') {
      return dispatch(globalFailure(response.message));
    }
    const { id } = response.question;
    dispatch(postQuestionSuccess());
    toastr.success('Question posted!');
    history.push(`/question/${id}`);
    return dispatch(globalLoading(false));
  });

export default postQuestion;
