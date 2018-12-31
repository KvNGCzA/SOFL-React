import searchReducer from '../../../src/reducers/searchReducer';
import { SEARCH_RESULTS_SUCCESS } from '../../../src/actions/actionTypes';

const initialState = {
  results: [],
  query: '',
  errors: ''
};


describe('searchReducer', () => {
  it('should return the initial state', () => {
    expect(searchReducer(initialState, {})).toEqual(initialState);
  });

  it('should return HOME_SUCCESS', () => {
    expect(searchReducer(
      initialState,
      {
        type: SEARCH_RESULTS_SUCCESS,
        results: [{ title: 'title' }],
        errors: ''
      }
    )).toEqual({
      results: [{ title: 'title' }],
      errors: ''
    });
  });
});
