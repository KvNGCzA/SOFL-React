import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import DefaultCommentCard, { CommentCard } from '../../../../src/components/Question/CommentCard';
import mockComments from '../../../../__mocks__/mockComment';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const { comments } = mockComments;
describe('CommentCard components snapshot test', () => {
  const initialState = {
    global: {
      isLoading: false,
      isLoggedIn: false
    },
    user: {
      username: 'frances'
    }
  };
  const store = mockStore(initialState);
  const firstComponent = shallow(<DefaultCommentCard comments={comments} store={store} />);
  test('CommentCard snapshot test', () => {
    expect(firstComponent).toMatchSnapshot();
  });
});

test('test unwrapped component', () => {
  const firstComponent = shallow(<CommentCard user="frances" comments={comments} isLoggedIn />);
  const secondComponent = shallow(<CommentCard comments={[]} isLoggedIn={false} />);
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
  expect(secondComponent).toMatchSnapshot();
});
