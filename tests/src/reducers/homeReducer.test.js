import homeReducer from '../../../src/reducers/homeReducer';
import { HOME_SUCCESS } from '../../../src/actions/actionTypes';

const initialState = {
  results: [],
  errors: ''
};


describe('homeReducer', () => {
  it('should return the initial state', () => {
    expect(homeReducer(initialState, {})).toEqual(initialState);
  });

  it('should return HOME_SUCCESS', () => {
    expect(homeReducer(
      initialState,
      {
        type: HOME_SUCCESS,
        results: [{ title: 'title' }],
        errors: ''
      }
    )).toEqual({
      results: [{ title: 'title' }],
      errors: ''
    });
  });
});
