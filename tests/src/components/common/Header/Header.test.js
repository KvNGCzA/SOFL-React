import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import DefaultHeader, { Header } from '../../../../../src/components/common/Header/header';

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
  user: {
    username: 'chris'
  }
};

const store = mockStore(initialState);

test('Header snapshot test', () => {
  const component = shallow(<DefaultHeader store={store} />);
  expect(component).toMatchSnapshot();
  component.props().logOutAction(true);
});

test('Header snapshot test', () => {
  const component = shallow(<Header logOutAction={jest.fn()} isLoggedIn />);
  expect(component).toMatchSnapshot();
  component.instance().logOutUser();
});

test('Header snapshot test', () => {
  const component = shallow(<Header logOutAction={jest.fn()} isLoggedIn={false} />);
  expect(component).toMatchSnapshot();
});
