import userReducer from '../../../src/reducers/userReducer';
import { SAVE_USER_INFO } from '../../../src/actions/actionTypes';

const initialState = {};


describe('userReducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(initialState, {})).toEqual(initialState);
  });

  it('should return SAVE_USER_INFO', () => {
    expect(userReducer(
      initialState,
      {
        type: SAVE_USER_INFO,
        user: { title: 'title' },
      }
    )).toEqual({
      title: 'title'
    });
  });
});
