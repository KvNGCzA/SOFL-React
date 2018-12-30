import React from 'react';
import { shallow } from 'enzyme';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import DefaultHomePage, { HomePage } from '../../../../src/components/HomePage/HomePage';
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
test('HomePage snapshot test', () => {
  fetchMock.get(`${process.env.API_BASE_URL}/questions`, {
    headers: { 'content-type': 'application/json' },
    body: mockResponse
  });
  const component = shallow(<DefaultHomePage store={store} />);
  expect(component).toMatchSnapshot();
  component.props().fetchQuestions();
  component.props().triggerLoading(true);
});

test('HomePage snapshot test', () => {
  const component = shallow(<HomePage
    fetchQuestions={jest.fn()}
    hotQuestions={questions[0]}
    questions={questions[1]}
    triggerLoading={jest.fn()} />);
  expect(component).toMatchSnapshot();

  component.instance().handleTab({ target: { textContent: 'Popular' } });
});
