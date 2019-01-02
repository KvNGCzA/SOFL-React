import React from 'react';
import { shallow } from 'enzyme';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import DefaultQuestionForm, { QuestionForm } from '../../../../src/components/common/QuestionForm';

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
  },
  postQuestion: {
    title: '',
    content: '',
    tags: ''
  }
};

const store = mockStore(initialState);

const postState = {
  title: 'chris',
  content: 'jbsdkjansd',
  tags: 'chris, oluwa, damilare'
};

const history = {
  push: jest.fn()
};


test('QuestionForm snapshot test', () => {
  const firstComponent = shallow(<QuestionForm
    isLoggedIn
    postState={postState}
    sendQuestion={jest.fn()}
    loading={jest.fn()}
    history={history}
    handleProgress={jest.fn()}
  />);
  const secondComponent = shallow(<QuestionForm
    isLoggedIn={false}
    postState={postState}
    sendQuestion={jest.fn()}
    loading={jest.fn()}
    history={history}
    handleProgress={jest.fn()}
    />);
  expect(firstComponent).toMatchSnapshot();
  expect(secondComponent).toMatchSnapshot();
  firstComponent.instance().handleTitleInput({ target: { value: 'chris' } });
  firstComponent.instance().handleTagsInput({ target: { value: 'chris' } });
  firstComponent.instance().handleContentInput({ target: { value: 'chris' } });
  firstComponent.instance().handleSubmit({
    preventDefault: jest.fn(),
    target: { ...postState }
  });
});

test('QuestionForm snapshot test', () => {
  fetchMock.post(`${process.env.API_BASE_URL}/questions`, {
    body: { status: 200, results: [] }
  });

  const firstComponent = shallow(<DefaultQuestionForm store={store} />);
  expect(firstComponent).toMatchSnapshot();
  firstComponent.props().loading(true);
  firstComponent.props().handleProgress(true);
  firstComponent.props().sendQuestion(postState, history);
});
