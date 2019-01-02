import { toastr } from 'react-redux-toastr';
import { GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE } from './actionTypes';
import { globalLoading } from './globalActions';

const getProfileSuccess = profile => ({
  type: GET_PROFILE_SUCCESS,
  profile,
  errors: ''
});

const getProfileFailure = errors => ({
  type: GET_PROFILE_FAILURE,
  errors,
  profile: {}
});

const profileAction = username => dispatch => fetch(`${process.env.API_BASE_URL}/auth/user/${username}`)
  .then(res => res.json())
  .then((response) => {
    if (response.status === 200) {
      response.user[0].password = undefined;
      dispatch(getProfileSuccess(response.user[0]));
      return dispatch(globalLoading(false));
    }
    dispatch(getProfileFailure(response.message));
    dispatch(globalLoading(false));
    return toastr.error(response.message);
  });

export default profileAction;
