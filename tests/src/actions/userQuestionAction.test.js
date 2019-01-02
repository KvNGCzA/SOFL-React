import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import userQuestionAction from '../../../src/actions/userQuestionAction';
import mockQuestions from '../../../__mocks__/mockQuestions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const { questions } = mockQuestions;

describe('PROFILE ACTION', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('PROFILE ACTION SUCCESS API CALL', () => {
    fetchMock.restore();
    const initialState = {
      profileQuestion: {
        questions: [],
        errors: ''
      }
    };
    const store = mockStore(initialState);
    const expectedActions = [{
      errors: '',
      questions,
      type: 'GET_PROFILE_QUESTIONS_SUCCESS'
    },
    {
      isLoading: false,
      type: 'TRIGGER_LOADING'
    }];

    fetchMock.get(`${process.env.API_BASE_URL}/questions/chris/questions`, { status: 200, questions });
    return store.dispatch(userQuestionAction('chris'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('PROFILE ACTION FAILURE API CALL', () => {
    const initialState = {
      profileQuestion: {
        questions: [],
        errors: ''
      }
    };
    const store = mockStore(initialState);
    const expectedActions = [{
      errors: 'no questions',
      questions: [],
      type: 'GET_PROFILE_QUESTIONS_FAILURE'
    },
    {
      isLoading: false,
      type: 'TRIGGER_LOADING'
    }];

    fetchMock.get(`${process.env.API_BASE_URL}/questions/chris/questions`, { status: 400, message: 'no questions' });
    return store.dispatch(userQuestionAction('chris'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
