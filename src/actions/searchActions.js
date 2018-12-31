import { toastr } from 'react-redux-toastr';

import { globalFailure, globalLoading } from './globalActions';
import { SEARCH_RESULTS_SUCCESS, SEARCH_RESULTS_FAILURE } from './actionTypes';

export const searchResultSuccess = (results, query) => ({
  type: SEARCH_RESULTS_SUCCESS,
  results,
  errors: '',
  query
});

export const searchResultFailure = (errors, query) => ({
  type: SEARCH_RESULTS_FAILURE,
  results: [],
  errors,
  query
});

const searchAction = searchTerm => dispatch => fetch(`${process.env.API_BASE_URL}/questions/search/${searchTerm}`)
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
      return dispatch(searchResultFailure(response.message, searchTerm));
    }
    dispatch(globalLoading(false));
    return dispatch(searchResultSuccess(response.results, searchTerm));
  });

export default searchAction;
