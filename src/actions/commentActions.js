import { toastr } from 'react-redux-toastr';

import { globalLoading, globalFailure } from './globalActions';
import requestOptions from '../utils/requestOptions';
import getToken from '../utils/getToken';
import {
  POST_COMMENT_SUCCESS,
  POST_COMMENT_INPROGRESS
} from './actionTypes';

export const commentSuccess = () => ({
  type: POST_COMMENT_SUCCESS,
  answer: '',
  id: ''
});

export const commentInProgress = (id, answer) => ({
  type: POST_COMMENT_INPROGRESS,
  answer,
  id,
});

const commentAction = (id, answer) => dispatch => fetch(`${process.env.API_BASE_URL}/questions/${id}/answers`, requestOptions(answer, 'POST', getToken()))
  .then(
    res => res.json(),
    (error) => {
      dispatch(globalFailure(['An error has occured', error]));
      toastr.error('An error has occured, please try again!');
    }
  )
  .then((response) => {
    if (response.status !== 201) {
      toastr.error('failed to post answer!');
      return dispatch(globalLoading(false));
    }
    dispatch(commentSuccess());
    toastr.success('answer posted!');
    return dispatch(globalLoading(false));
  });

export default commentAction;
