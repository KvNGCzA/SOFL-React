import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import DefaultSearchPage, { SearchPage } from '../../../../src/components/SearchPage/SearchPage';
import mockQuestions from '../../../../__mocks__/mockQuestions';

const { questions } = mockQuestions;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = {
  global: {
    isLoggedIn: false,
    isLoading: false,
    error: []
  },
  home: {
    results: [],
    errors: ''
  },
  sidebar: {
    results: [],
    errors: ''
  },
  searchResults: {
    results: [],
    query: '',
    errors: ''
  }
};

const store = mockStore(initialState);

test('SearchPage snapshot test', () => {
  const firstComponent = shallow(<SearchPage
    location={{ search: '?search=girls' }}
    searchResults={[]}
    fetchSearchResults={jest.fn()}
    previousQuery="girls" />);
  const secondComponent = shallow(<SearchPage
    location={{ search: '?search=girls' }}
    searchResults={questions[0]}
    fetchSearchResults={jest.fn()}
    previousQuery="boys" />);
  expect(firstComponent).toMatchSnapshot();
  expect(secondComponent).toMatchSnapshot();
});

test('SearchPage snapshot test', () => {
  fetchMock.get(`${process.env.API_BASE_URL}/questions/search/girls`, { status: 'failure', message: 'no' });
  const firstComponent = shallow(<DefaultSearchPage store={store} location={{ search: '?search=girls' }} />);
  expect(firstComponent).toMatchSnapshot();
  firstComponent.props().fetchSearchResults('girls');
});
