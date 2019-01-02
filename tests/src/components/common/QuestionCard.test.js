import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import DefaultQuestionCard, { QuestionCard } from '../../../../src/components/common/QuestionCard';
import mockQuestions from '../../../../__mocks__/mockQuestions';

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
  },
  user: {
    username: 'King3010'
  }
};

const store = mockStore(initialState);

const { questions } = mockQuestions;
const one = questions[0][0];
describe('Question Card components snapshot test', () => {
  const firstComponent = shallow(<QuestionCard question={one} owner="King3010" />);
  const secondComponent = shallow(<QuestionCard question={one} owner="King" />);
  test('Signup snapshot test', () => {
    expect(firstComponent).toMatchSnapshot();
    expect(secondComponent).toMatchSnapshot();
    firstComponent.instance().handleEditOption({
      target: {
        parentElement: {
          nextSibling: {
            style: {
              display: 'block'
            }
          }
        }
      },
    });
    firstComponent.instance().handleEditOption({
      target: {
        parentElement: {
          nextSibling: {
            style: {
              display: 'none'
            }
          }
        }
      },
    });
  });
});

describe('Question Card components snapshot test', () => {
  const firstComponent = shallow(<DefaultQuestionCard store={store} question={one} />);
  test('Signup snapshot test', () => {
    expect(firstComponent).toMatchSnapshot();
  });
});
