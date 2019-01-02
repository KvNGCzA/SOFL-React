import profileReducer from '../../../src/reducers/profileReducer';
import { GET_PROFILE_FAILURE, GET_PROFILE_SUCCESS } from '../../../src/actions/actionTypes';
import profile from '../../../__mocks__/mockProfile';

const initialState = {
  profile: {},
  errors: ''
};


describe('profileReducer', () => {
  it('should return the initial state', () => {
    expect(profileReducer(initialState, {})).toEqual(initialState);
  });

  it('should return GET_PROFILE_FAILURE', () => {
    expect(profileReducer(
      initialState,
      {
        type: GET_PROFILE_FAILURE,
        profile: {},
        errors: 'error'
      }
    )).toEqual({
      profile: {},
      errors: 'error'
    });
  });

  it('should return GET_PROFILE_SUCCESS', () => {
    expect(profileReducer(
      initialState,
      {
        type: GET_PROFILE_SUCCESS,
        profile,
        errors: ''
      }
    )).toEqual({
      profile,
      errors: ''
    });
  });
});
