import React from 'react';
import { shallow } from 'enzyme';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import DefaultCommentForm, { CommentForm } from '../../../../src/components/Question/CommentForm';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let match;

describe('CommentForm components snapshot test', () => {
  match = {
    params: {
      id: 9
    }
  };
  const initialState = {
    global: {
      isLoading: false,
      isLoggedIn: false
    },
    user: {
      username: 'frances'
    },
    currentComment: {
      id: 7,
      answer: 'jonsdjonsajnd'
    }
  };
  afterEach(() => {
    fetchMock.restore();
  });
  const store = mockStore(initialState);
  const firstComponent = shallow(<DefaultCommentForm
    match={match}
    store={store} />);

  test('CommentForm snapshot test', () => {
    expect(firstComponent).toMatchSnapshot();
  });

  it('run POSTCOMMENT', () => {
    fetchMock.post(`${process.env.API_BASE_URL}/questions/1/answers`, { status: 201, question: { id: 1 } });
    firstComponent.props().postComment(1, { answer: 'kjabsfkjbaf' });
    firstComponent.props().loading(true);
    firstComponent.props().inProgress(7, { answer: 'kjabsfkjbaf' });
  });
});

test('test unwrapped component', () => {
  match = {
    params: {
      id: 7
    }
  };
  const firstComponent = shallow(<CommentForm
    inProgress={jest.fn()}
    match={match}
    isLoggedIn
    postComment={jest.fn()}
    loading={jest.fn()}
    currentComment={{ id: 7, answer: 'jonsdjonsajnd' }}
    />);
  match = {
    params: {
      id: 8
    }
  };
  const secondComponent = shallow(<CommentForm
    inProgress={jest.fn()}
    match={match}
    isLoggedIn={false}
    postComment={jest.fn()}
    loading={jest.fn()}
    currentComment={{ id: 9, answer: 'jonsdjonsajnd' }}
    />);
  expect(firstComponent).toMatchSnapshot();
  expect(secondComponent).toMatchSnapshot();
  firstComponent.instance().handleCommentInput({
    target: {
      value: 'far fa-thumbs-up likebutton'
    }
  });
  firstComponent.instance().handleComment({
    target: {
      answer: {
        value: 'far fa-thumbs-up likebutton'
      }
    },
    preventDefault: jest.fn()
  });
});
