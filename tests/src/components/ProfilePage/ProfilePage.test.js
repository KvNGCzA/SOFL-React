import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import DefaultProfilePage, { ProfilePage } from '../../../../src/components/ProfilePage/ProfilePage';
import profile from '../../../../__mocks__/mockProfile';
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
  profile: {
    profile
  },
  profileQuestion: {
    questions
  }
};

const store = mockStore(initialState);


test('ProfilePage snapshot test', () => {
  const firstComponent = shallow(<ProfilePage
    location={{ search: '?search=girls' }}
    getUserProfile={jest.fn()}
    getUserQuestions={jest.fn()}
    loading={jest.fn()}
    profile={profile}
    userQuestions={questions}
    match={{ params: { username: 'Chris' } }} />);
  const secondComponent = shallow(<ProfilePage
    location={{ search: '?search=girls' }}
    getUserProfile={jest.fn()}
    getUserQuestions={jest.fn()}
    loading={jest.fn()}
    profile={{}}
    userQuestions={questions}
    match={{ params: { username: 'Chris' } }} />);
  expect(firstComponent).toMatchSnapshot();
  firstComponent.instance().handleTab({ target: { textContent: 'Most Answered' } });
  expect(firstComponent).toMatchSnapshot();
  expect(secondComponent).toMatchSnapshot();
});

describe('ProfilePage snapshot test', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should return user profile', () => {
    fetchMock.get(`${process.env.API_BASE_URL}/auth/user/Chris`, { status: 200, user: [profile] });
    const firstComponent = shallow(<DefaultProfilePage
      store={store}
      match={{ params: { username: 'Chris' } }} />);
    expect(firstComponent).toMatchSnapshot();
    firstComponent.props().getUserProfile('Chris');
    firstComponent.props().loading(true);
  });

  it('should call getUserQuestions()', () => {
    fetchMock.get(`${process.env.API_BASE_URL}/questions/chris/questions`, { status: 200, user: [questions] });
    const firstComponent = shallow(<DefaultProfilePage
      store={store}
      match={{ params: { username: 'Chris' } }} />);
    expect(firstComponent).toMatchSnapshot();
    firstComponent.props().getUserQuestions('chris');
  });
});
