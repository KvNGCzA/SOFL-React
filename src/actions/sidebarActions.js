import { toastr } from 'react-redux-toastr';

import { SIDEBAR_SUCCESS, SIDEBAR_FAILURE } from './actionTypes';

export const sidebarSuccess = results => ({
  type: SIDEBAR_SUCCESS,
  results,
  errors: '',
});

export const sidebarFailure = errors => ({
  type: SIDEBAR_FAILURE,
  results: [],
  errors,
});

const sidebarAction = () => dispatch => fetch(`${process.env.API_BASE_URL}/questions`)
  .then(
    res => res.json(),
    () => toastr.error('An error has occured, please try again!')
  )
  .then((response) => {
    if (response.status !== 200) {
      return dispatch(sidebarFailure(response.errors.message));
    }
    return dispatch(sidebarSuccess(response.questions[1]));
  });

export default sidebarAction;
