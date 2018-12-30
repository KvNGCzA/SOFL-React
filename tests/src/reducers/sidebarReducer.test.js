import sidebarReducer from '../../../src/reducers/sidebarReducer';
import { SIDEBAR_SUCCESS } from '../../../src/actions/actionTypes';

const initialState = {
  results: [],
  errors: ''
};


describe('sidebarReducer', () => {
  it('should return the initial state', () => {
    expect(sidebarReducer(initialState, {})).toEqual(initialState);
  });

  it('should return results and empty error', () => {
    expect(sidebarReducer(
      initialState,
      {
        type: SIDEBAR_SUCCESS,
        results: [{ title: 'title' }],
        errors: ''
      }
    )).toEqual({
      results: [{ title: 'title' }],
      errors: ''
    });
  });
});
