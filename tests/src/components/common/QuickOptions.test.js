import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import DefaultQuickOptions, { QuickOptions } from '../../../../src/components/common/quickOptions';

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
  }
};

const store = mockStore(initialState);

test('QuickOptions snapshot test', () => {
  const firstComponent = shallow(<QuickOptions isLoggedIn />);
  const secondComponent = shallow(<QuickOptions isLoggedIn={false} />);
  expect(firstComponent).toMatchSnapshot();
  expect(secondComponent).toMatchSnapshot();
});

test('QuickOptions snapshot test', () => {
  const firstComponent = shallow(<DefaultQuickOptions store={store} />);
  expect(firstComponent).toMatchSnapshot();
});
