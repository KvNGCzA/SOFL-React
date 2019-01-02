import React from 'react';
import { shallow } from 'enzyme';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import DefaultQuestion, { Question } from '../../../../src/components/Question/Question';
import mockComments from '../../../../__mocks__/mockComment';
import mockQuestions from '../../../../__mocks__/mockQuestions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const { comments } = mockComments;
const { questions } = mockQuestions;

const question = questions[0][0];

const match = { params: { id: 1 } };

describe('Question components snapshot test', () => {
  const initialState = {
    global: {
      isLoading: false,
      isLoggedIn: false
    },
    user: {
      username: 'frances'
    },
    singleQuestion: {
      question,
      comments
    }
  };
  const store = mockStore(initialState);
  const firstComponent = shallow(<DefaultQuestion
    match={match}
    comments={comments}
    store={store}
    location={{ location: { pathname: 'question/1' } }}
    />);
  test('Question snapshot test', () => {
    fetchMock.get(`${process.env.API_BASE_URL}/questions/1`, { status: 200, question, answers: [] });
    expect(firstComponent).toMatchSnapshot();
    firstComponent.props().fetchQuestion(1);
    firstComponent.props().loading(true);
  });
});

test('test unwrapped component', () => {
  const firstComponent = shallow(<Question
    fetchQuestion={jest.fn()}
    loading={jest.fn()}
    match={match}
    user="frances"
    comments={comments}
    isLoggedIn
    question={question}
    location={{ location: { pathname: 'question/1' } }}
    />);
  const secondComponent = shallow(<Question
    fetchQuestion={jest.fn()}
    loading={jest.fn()}
    match={match}
    comments={[]}
    question={{}}
    location={{ location: { pathname: 'question/1' } }}
    isLoggedIn={false} />);

  question.username = 'frances';
  question.likes = ['frances'];
  question.dislikes = ['frances'];

  const thirdComponent = shallow(<Question
    fetchQuestion={jest.fn()}
    loading={jest.fn()}
    user="frances"
    match={match}
    comments={comments}
    question={question}
    location={{ location: { pathname: 'question/1' } }}
    isLoggedIn />);

  expect(firstComponent).toMatchSnapshot();
  expect(firstComponent).toMatchSnapshot();
  firstComponent.instance().handleLikeButton({
    target: {
      classList: {
        value: 'far fa-thumbs-up likebutton'
      }
    }
  });
  firstComponent.instance().handleLikeButton({
    target: {
      classList: {
        value: 'fas fa-thumbs-up likebutton'
      }
    }
  });
  firstComponent.instance().handleDislikeButton({
    target: {
      classList: {
        value: 'far fa-thumbs-down dislikebutton'
      }
    }
  });
  firstComponent.instance().handleDislikeButton({
    target: {
      classList: {
        value: 'fas fa-thumbs-down dislikebutton'
      }
    }
  });
  firstComponent.instance().componentDidUpdate({ location: { pathname: 'question/2' } });
  expect(firstComponent).toMatchSnapshot();
  expect(secondComponent).toMatchSnapshot();
  expect(thirdComponent).toMatchSnapshot();
});
