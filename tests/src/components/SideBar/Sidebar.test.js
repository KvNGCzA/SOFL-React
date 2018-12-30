import React from 'react';
import { shallow } from 'enzyme';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import DefaultSidebar, { Sidebar } from '../../../../src/components/Sidebar/SideBar';
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
  }
};

const mockResponse = {
  status: 200,
  questions: [
    [{ title: 'test title 1' },
      { title: 'test title 2' }],
    [{ title: 'test title 1' },
      { title: 'test title 2' }]
  ]
};

const store = mockStore(initialState);

test('Sidebar snapshot test', () => {
  fetchMock.get(`${process.env.API_BASE_URL}/questions`, {
    headers: { 'content-type': 'application/json' },
    body: mockResponse
  });
  const component = shallow(<DefaultSidebar store={store} />);
  expect(component).toMatchSnapshot();
  component.props().fetchHotQuestions();
});

test('Sidebar snapshot test', () => {
  const component = shallow(<Sidebar hotQuestions={questions[0]} fetchHotQuestions={jest.fn()} />);
  expect(component).toMatchSnapshot();
});
