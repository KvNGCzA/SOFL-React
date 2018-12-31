import postQuestionReducer from '../../../src/reducers/postQuestionReducer';
import { POST_QUESTION_INPROGRESS, POST_QUESTION_SUCCESS } from '../../../src/actions/actionTypes';

const initialState = {
  title: '',
  content: '',
  tags: ''
};


describe('postQuestionReducer', () => {
  it('should return the initial state', () => {
    expect(postQuestionReducer(initialState, {})).toEqual(initialState);
  });

  it('should return POST_QUESTION_INPROGRESS', () => {
    expect(postQuestionReducer(
      initialState,
      {
        type: POST_QUESTION_INPROGRESS,
        payload: {
          title: '',
          content: '',
          tags: ''
        }
      }
    )).toEqual({
      title: '',
      content: '',
      tags: ''
    });
  });

  it('should return POST_QUESTION_SUCCESS', () => {
    expect(postQuestionReducer(
      initialState,
      {
        type: POST_QUESTION_SUCCESS,
        title: '',
        content: '',
        tags: ''
      }
    )).toEqual({
      title: '',
      content: '',
      tags: ''
    });
  });
});
