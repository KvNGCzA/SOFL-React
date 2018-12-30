import { HOME_SUCCESS, HOME_FAILURE } from './actionTypes';

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

const homeAction = () => (dispatch) => {
  return fetch('https://safe-inlet-99347.herokuapp.com/api/v2/questions')
    .then(
      res => res.json()
      // (error) => {
      //   toastr.error('An error has occured, please try again!');
      // }
    )
    .then((response) => {
      if (response.status !== 200) {
        return dispatch(homeFailure(response.errors.message));
      }
      return dispatch(homeSuccess(response.questions[0]));
    });
};

export default homeAction;
