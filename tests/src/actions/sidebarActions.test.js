import configureMockStore from 'redux-mock-store';

import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import sidebarActions from '../../../src/actions/sidebarActions';
import {
  SIDEBAR_SUCCESS,
  SIDEBAR_FAILURE
} from '../../../src/actions/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

afterEach(() => {
  fetchMock.restore();
});

test('TEST SIDEBAR_SUCCESS', () => {
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
      type: SIDEBAR_SUCCESS,
      results: [
        { title: 'test title 1' },
        { title: 'test title 2' }
      ],
      errors: ''
    }
  ];

  const store = mockStore({});

  return store.dispatch(sidebarActions())
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
});

test('TEST SIDEBAR_FAILURE', () => {
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
      type: SIDEBAR_FAILURE,
      results: [],
      errors: 'no questions here'
    }
  ];

  const store = mockStore({});

  return store.dispatch(sidebarActions())
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
});
