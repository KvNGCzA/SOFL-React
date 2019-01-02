import commentReducer from '../../../src/reducers/commentReducer';
import { POST_COMMENT_INPROGRESS, POST_COMMENT_SUCCESS } from '../../../src/actions/actionTypes';

const initialState = {
  id: '',
  answer: ''
};


describe('commentReducer', () => {
  it('should return the initial state', () => {
    expect(commentReducer(initialState, {})).toEqual(initialState);
  });

  it('should return POST_COMMENT_INPROGRESS', () => {
    expect(commentReducer(
      initialState,
      {
        type: POST_COMMENT_INPROGRESS,
        id: '7',
        answer: 'msdm'
      }
    )).toEqual({
      id: '7',
      answer: 'msdm'
    });
  });

  it('should return POST_COMMENT_SUCCESS', () => {
    expect(commentReducer(
      initialState,
      {
        type: POST_COMMENT_SUCCESS,
        id: '',
        answer: ''
      }
    )).toEqual({
      id: '',
      answer: ''
    });
  });
});
