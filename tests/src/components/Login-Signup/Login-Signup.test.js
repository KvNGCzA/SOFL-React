import React from 'react';
import { shallow } from 'enzyme';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import DefaultLoginSignup, { LoginSignup, LoginForm, SignUpForm } from '../../../../src/components/Login-Signup/Login-Signup';

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
let store;
describe('', () => {
  store = mockStore(initialState);
  it('Sidebar snapshot test', () => {
    const component = shallow(<LoginForm handleSwitch={jest.fn()} handleLogin={jest.fn()} />);
    expect(component).toMatchSnapshot();
  });

  it('Sidebar snapshot test', () => {
    const component = shallow(<SignUpForm handleSwitch={jest.fn()} handleSignup={jest.fn()} />);
    expect(component).toMatchSnapshot();
  });

  it('Sidebar snapshot test', () => {
    fetchMock.post(`${process.env.API_BASE_URL}/auth/login`, {
      headers: { 'content-type': 'application/json' },
      body: mockResponse
    });
    fetchMock.post(`${process.env.API_BASE_URL}/auth/signup`, {
      headers: { 'content-type': 'application/json' },
      body: mockResponse
    });
    const component = shallow(<DefaultLoginSignup store={store} />);
    expect(component).toMatchSnapshot();
    component.props().loginUser({ firstName: 'Chris' });
    component.props().signupUser({ firstName: 'Chris' });
    component.props().triggerLoading(true);
  });

  it('Sidebar snapshot test', () => {
    const component = shallow(<LoginSignup
      isLoggedIn
      loginUser={jest.fn()}
      signupUser={jest.fn()}
      triggerLoading={jest.fn()} />);
    component.instance().handleSignup({
      target: {
        fname: {
          value: 'chris'
        },
        lname: {
          value: 'chris'
        },
        username: {
          value: 'chris'
        },
        email: {
          value: 'chris'
        },
        pwd: {
          value: 'chris'
        },
        occupation: {
          value: 'chris'
        },
        profileImage: {
          files: ['chris']
        }
      },
      preventDefault: jest.fn()
    });
    component.instance().handleLogin({
      target: {
        email: {
          value: 'chris'
        },
        pwd: {
          value: 'chris'
        }
      },
      preventDefault: jest.fn()
    });
    component.instance().handleSwitch({ target: { textContent: 'chris' } });
    expect(component).toMatchSnapshot();
  });

  it('Sidebar snapshot test', () => {
    const component = shallow(<LoginSignup
      isLoggedIn={false}
      loginUser={jest.fn()}
      signupUser={jest.fn()}
      triggerLoading={jest.fn()} />);
    expect(component).toMatchSnapshot();
  });
});
