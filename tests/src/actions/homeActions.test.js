import configureMockStore from 'redux-mock-store';

import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import homeActions from '../../../src/actions/homeActions';
import {
  HOME_SUCCESS,
  HOME_FAILURE,
  TRIGGER_LOADING
} from '../../../src/actions/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

afterEach(() => {
  fetchMock.restore();
});

test('TEST HOME_SUCCESS', () => {
  const mockResponse = {
    status: 200,
    questions: [
      [{ title: 'test title 1' },
        { title: 'test title 2' }],
      [{ title: 'test title 1' },
        { title: 'test title 2' }]
    ]
  };

  fetchMock.get(`${process.env.API_BASE_URL}/questions`, {
    headers: { 'content-type': 'application/json' },
    body: mockResponse
  });

  const expectedActions = [
    {
      type: HOME_SUCCESS,
      results: [
        { title: 'test title 1' },
        { title: 'test title 2' }
      ],
      errors: ''
    },
    {
      type: TRIGGER_LOADING,
      isLoading: false,
    }
  ];

  const store = mockStore({});

  return store.dispatch(homeActions())
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
});

test('TEST HOME_FAILURE', () => {
  const mockResponse = {
    status: 400,
    errors: {
      message: 'no questions here'
    }
  };

  fetchMock.get(`${process.env.API_BASE_URL}/questions`, {
    headers: { 'content-type': 'application/json' },
    body: mockResponse
  });

  const expectedActions = [
    {
      type: HOME_FAILURE,
      results: [],
      errors: 'no questions here'
    },
    {
      type: TRIGGER_LOADING,
      isLoading: false,
    }
  ];

  const store = mockStore({});

  return store.dispatch(homeActions())
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
});
