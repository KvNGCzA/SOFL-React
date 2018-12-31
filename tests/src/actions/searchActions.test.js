import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import searchAction, { searchResultFailure, searchResultSuccess } from '../../../src/actions/searchActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('SEARCH ACTIONS', () => {
  it('SEARCH FAILURE', () => {
    const expectedActions = [
      {
        type: 'SEARCH_RESULTS_FAILURE', results: [], errors: 'no on Stackoverflow Lite', query: 'fashion'
      }
    ];
    const store = mockStore({
      searchResults: {
        results: [],
        errors: {},
        query: ''
      }
    });

    store.dispatch(searchResultFailure('no on Stackoverflow Lite', 'fashion'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('AUHTORS SUCCESS', () => {
    const expectedActions = [
      {
        type: 'SEARCH_RESULTS_SUCCESS', results: 'all on Stackoverflow Lite', errors: '', query: 'fashion'
      }
    ];
    const store = mockStore({
      searchResults: {
        results: [],
        errors: {},
        query: ''
      }
    });

    store.dispatch(searchResultSuccess('all on Stackoverflow Lite', 'fashion'));
    expect(store.getActions()).toEqual(expectedActions);
  });


  it('SEARCH ACTION API CALL', () => {
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
        isLoading: false, type: 'TRIGGER_LOADING'
      },
      {
        errors: 'no', query: 'fashion', results: [], type: 'SEARCH_RESULTS_FAILURE'
      }
    ];

    fetchMock.get(`${process.env.API_BASE_URL}/questions/search/fashion`, { status: 'failure', message: 'no' });
    return store.dispatch(searchAction('fashion'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
