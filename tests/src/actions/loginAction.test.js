import configureMockStore from 'redux-mock-store';

import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import loginAction from '../../../src/actions/loginAction';

import {
  TRIGGER_LOADING,
  TRIGGER_LOGGEDIN,
  SAVE_USER_INFO,
  TRIGGER_FAILURE
} from '../../../src/actions/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

afterEach(() => {
  fetchMock.restore();
});

test('TEST LOGIN_ACTION', () => {
  const mockResponse = {
    status: 200,
    profile: {
    },
    token: 'i983973f2hf397fhg23f.973ffsjhfa93fq'
  };

  const userObject = {
    email: 'chris@yahoo.com',
    password: 'oouf973y'
  };

  fetchMock.post(`${process.env.API_BASE_URL}/auth/login`, {
    headers: { 'content-type': 'application/json' },
    body: mockResponse
  });

  const expectedActions = [
    {
      type: SAVE_USER_INFO,
      user: {
        password: undefined,
        token: 'i983973f2hf397fhg23f.973ffsjhfa93fq'
      }
    },
    {
      type: TRIGGER_LOGGEDIN,
      isLoggedIn: true,
    },
    {
      type: TRIGGER_LOADING,
      isLoading: false,
    }
  ];

  const store = mockStore({});

  return store.dispatch(loginAction(userObject))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
});

test('TEST LOGIN ACTION FAILURE', () => {
  const mockResponse = {
    status: 400,
    message: 'no questions here'
  };

  fetchMock.post(`${process.env.API_BASE_URL}/auth/login`, {
    headers: { 'content-type': 'application/json' },
    body: mockResponse
  });

  const expectedActions = [
    {
      type: TRIGGER_FAILURE,
      isLoading: false,
      error: 'no questions here'
    }
  ];

  const store = mockStore({});

  return store.dispatch(loginAction())
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
});
