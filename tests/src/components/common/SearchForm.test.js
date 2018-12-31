import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import DefaultSearchForm, { SearchForm } from '../../../../src/components/common/SearchForm';

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
    query: ''
  }
};

const store = mockStore(initialState);


test('SearchForm snapshot test', () => {
  const firstComponent = shallow(<SearchForm
    mobile
    location={{ pathname: '/search' }}
    history={{ push: jest.fn() }}
    fetchSearchResults={jest.fn()}
    previousQuery="chris"
  />);
  const secondComponent = shallow(<SearchForm
    mobile={false}
    location={{ pathname: '/' }}
    history={{ push: jest.fn() }}
    fetchSearchResults={jest.fn()}
    previousQuery="girls"
    />);
  expect(firstComponent).toMatchSnapshot();
  expect(secondComponent).toMatchSnapshot();
  firstComponent.instance().handleSubmit({ target: { search: { value: 'chris' } }, preventDefault: jest.fn() });
  secondComponent.instance().handleSubmit({ target: { search: { value: 'chris' } }, preventDefault: jest.fn() });
});

test('SearchForm snapshot test', () => {
  const firstComponent = shallow(<DefaultSearchForm store={store} />);
  expect(firstComponent).toMatchSnapshot();
  fetchMock.get(`${process.env.API_BASE_URL}/questions/search/girls`, {
    body: { status: 200, results: [] }
  });

  firstComponent.props().fetchSearchResults('girls');
});
