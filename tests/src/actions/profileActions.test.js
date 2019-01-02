import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import profileAction from '../../../src/actions/profileAction';
import profile from '../../../__mocks__/mockProfile';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('PROFILE ACTION', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('PROFILE ACTION SUCCESS API CALL', () => {
    fetchMock.restore();
    const initialState = {
      profile: {
        profile: {},
        errors: ''
      }
    };
    const store = mockStore(initialState);
    const expectedActions = [{
      errors: '',
      profile: {
        answered_count: 8,
        asked_count: 5,
        created_at: '2018-10-09T15:23:17.437Z',
        fullname: 'Aanmu Chris',
        occupation: 'Programmer',
        password: undefined,
        profileimage: 'https://bit.ly/2UysylQ',
        username: 'cza3010'
      },
      type: 'GET_PROFILE_SUCCESS'
    },
    {
      isLoading: false,
      type: 'TRIGGER_LOADING'
    }];

    fetchMock.get(`${process.env.API_BASE_URL}/auth/user/chris`, { status: 200, user: [profile] });
    return store.dispatch(profileAction('chris'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('PROFILE ACTION FAILURE API CALL', () => {
    const initialState = {
      profile: {
        profile: {},
        errors: ''
      }
    };
    const store = mockStore(initialState);
    const expectedActions = [{
      errors: 'no user',
      profile: {},
      type: 'GET_PROFILE_FAILURE'
    },
    {
      isLoading: false,
      type: 'TRIGGER_LOADING'
    }];

    fetchMock.get(`${process.env.API_BASE_URL}/auth/user/chris`, { status: 400, message: 'no user' });
    return store.dispatch(profileAction('chris'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
