import profileQuestionReducer from '../../../src/reducers/profileQuestionReducer';
import { GET_PROFILE_QUESTIONS_FAILURE, GET_PROFILE_QUESTIONS_SUCCESS } from '../../../src/actions/actionTypes';

const initialState = {
  questions: [],
  errors: ''
};


describe('profileQuestionReducer', () => {
  it('should return the initial state', () => {
    expect(profileQuestionReducer(initialState, {})).toEqual(initialState);
  });

  it('should return GET_PROFILE_QUESTIONS_FAILURE', () => {
    expect(profileQuestionReducer(
      initialState,
      {
        type: GET_PROFILE_QUESTIONS_FAILURE,
        questions: [],
        errors: 'error'
      }
    )).toEqual({
      questions: [],
      errors: 'error'
    });
  });

  it('should return GET_PROFILE_QUESTIONS_SUCCESS', () => {
    expect(profileQuestionReducer(
      initialState,
      {
        type: GET_PROFILE_QUESTIONS_SUCCESS,
        questions: [['cza'], ['cza']],
        errors: ''
      }
    )).toEqual({
      questions: [['cza'], ['cza']],
      errors: ''
    });
  });
});
