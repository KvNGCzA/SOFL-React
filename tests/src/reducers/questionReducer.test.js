import questionReducer from '../../../src/reducers/questionReducer';
import { GET_SINGLE_QUESTION_SUCCESS } from '../../../src/actions/actionTypes';

const initialState = {
  question: {},
  comments: [],
  errors: ''
};


describe('questionReducer', () => {
  it('should return the initial state', () => {
    expect(questionReducer(initialState, {})).toEqual(initialState);
  });

  it('should return GET_SINGLE_QUESTION_SUCCESS', () => {
    expect(questionReducer(
      initialState,
      {
        type: GET_SINGLE_QUESTION_SUCCESS,
        question: {},
        comments: [],
        errors: ''
      }
    )).toEqual({
      question: {},
      comments: [],
      errors: ''
    });
  });
});
