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

const sidebarAction = () => (dispatch) => {
  return fetch('https://safe-inlet-99347.herokuapp.com/api/v2/questions')
    .then(
      res => res.json()
      // (error) => {
      //   toastr.error('An error has occured, please try again!');
      // }
    )
    .then((response) => {
      if (response.status !== 200) {
        return dispatch(sidebarFailure(response.errors.message));
      }
      return dispatch(sidebarSuccess(response.questions[1]));
    });
};

export default sidebarAction;
