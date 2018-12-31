import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import postQuestion from '../../../src/actions/postQuestionAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const history = {
  push: jest.fn()
};


describe('POST QUESTIONS', () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it('POST QUESTION API CALL', () => {
    const initialState = {
      searchResults: {
        results: [],
        errors: {},
        query: ''
      }
    };
    const store = mockStore(initialState);
    const expectedActions = [
      {
        isLoading: false,
        type: 'TRIGGER_LOADING'
      },
      {
        error: 'not posted',
        isLoading: false,
        type: 'TRIGGER_FAILURE'
      }
    ];

    fetchMock.post(`${process.env.API_BASE_URL}/questions`, { message: 'not posted', question: { id: 1 } });
    return store.dispatch(postQuestion('fashion', history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('POST QUESTION API CALL', () => {
    const initialState = {
      searchResults: {
        results: [],
        errors: {},
        query: ''
      }
    };
    const store = mockStore(initialState);
    const expectedActions = [
      {
        isLoading: false,
        type: 'TRIGGER_LOADING'
      },
      {
        content: '',
        tags: '',
        title: '',
        type: 'POST_QUESTION_SUCCESS'
      },
      {
        isLoading: false,
        type: 'TRIGGER_LOADING'
      }
    ];

    fetchMock.post(`${process.env.API_BASE_URL}/questions`, { message: 'question posted!', question: { id: 1 } });
    return store.dispatch(postQuestion('fashion', history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
