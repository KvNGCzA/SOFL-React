import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import questionAction from '../../../src/actions/questionAction';
import mockQuestions from '../../../__mocks__/mockQuestions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const { questions } = mockQuestions;
const question = questions[0];
describe('PROFILE ACTION', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('PROFILE ACTION SUCCESS API CALL', () => {
    fetchMock.restore();
    const initialState = {
      singleQuestion: {
        question: {},
        comments: [],
        errors: ''
      }
    };
    const store = mockStore(initialState);
    const expectedActions = [{
      isLoading: false,
      type: 'TRIGGER_LOADING'
    },
    {
      question: {
        id: 6,
        title: 'Does Jelili have sense?',
        content: 'Please does Jelili have sense?',
        tags: 'cohort 41, andel, lagos',
        username: 'cza3010',
        userid: 1,
        likes: null,
        dislikes: ['cza3010', 'King3010'],
        answers_count: 0,
        created_at: '2018-10-09T15:23:17.437Z',
        modified_date: '2018-10-09T15:23:17.437Z',
        fts: "'jelili':2,7 'pleas':5 'sens':4,9"
      },
      comments: [],
      errors: '',
      type: 'GET_SINGLE_QUESTION_SUCCESS'
    }];

    fetchMock.get(`${process.env.API_BASE_URL}/questions/1`, { status: 200, question, answers: [] });
    return store.dispatch(questionAction(1))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('PROFILE ACTION SUCCESS API CALL', () => {
    fetchMock.restore();
    const initialState = {
      singleQuestion: {
        question: {},
        comments: [],
        errors: ''
      }
    };
    const store = mockStore(initialState);
    const expectedActions = [{
      isLoading: false,
      type: 'TRIGGER_LOADING'
    },
    {
      question: {},
      comments: [],
      errors: 'question does not',
      type: 'GET_SINGLE_QUESTION_FAILURE'
    }];

    fetchMock.get(`${process.env.API_BASE_URL}/questions/1`, { status: 400, message: 'question does not' });
    return store.dispatch(questionAction(1))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
