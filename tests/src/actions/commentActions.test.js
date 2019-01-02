import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import commentAction from '../../../src/actions/commentActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('POST COMMENT', () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it('POST COMMENT API CALL', () => {
    const initialState = {
      currentComment: {
        id: '',
        answer: ''
      }
    };
    const store = mockStore(initialState);
    const expectedActions = [
      {
        answer: '',
        id: '',
        type: 'POST_COMMENT_SUCCESS'
      },
      {
        isLoading: false,
        type: 'TRIGGER_LOADING'
      }
    ];

    fetchMock.post(`${process.env.API_BASE_URL}/questions/1/answers`, { status: 201, question: { id: 1 } });
    return store.dispatch(commentAction(1))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('POST COMMENT API CALL', () => {
    const initialState = {
      currentComment: {
        id: '',
        answer: ''
      }
    };
    const store = mockStore(initialState);
    const expectedActions = [
      {
        isLoading: false,
        type: 'TRIGGER_LOADING'
      }
    ];

    fetchMock.post(`${process.env.API_BASE_URL}/questions/1/answers`, { status: 400, question: { id: 1 } });
    return store.dispatch(commentAction(1))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
