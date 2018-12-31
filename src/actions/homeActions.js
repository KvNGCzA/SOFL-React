import { toastr } from 'react-redux-toastr';

import { HOME_SUCCESS, HOME_FAILURE } from './actionTypes';
import { globalLoading, globalFailure } from './globalActions';

export const homeSuccess = results => ({
  type: HOME_SUCCESS,
  results,
  errors: '',
});

export const homeFailure = errors => ({
  type: HOME_FAILURE,
  results: [],
  errors,
});

const homeAction = () => dispatch => fetch(`${process.env.API_BASE_URL}/questions`)
  .then(
    res => res.json(),
    (error) => {
      dispatch(globalFailure(['An error has occured', error]));
      toastr.error('An error has occured, please try again!');
    }
  )
  .then((response) => {
    if (response.status !== 200) {
      dispatch(homeFailure(response.errors.message));
      return dispatch(globalLoading(false));
    }
    dispatch(homeSuccess(response.questions[0]));
    return dispatch(globalLoading(false));
  });

export default homeAction;
