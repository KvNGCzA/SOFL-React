export default {
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
  userInfo: {},
  searchResults: {
    results: [],
    query: '',
    errors: ''
  },
  postQuestion: {
    title: '',
    content: '',
    tags: ''
  },
  profile: {
    profile: {},
    errors: ''
  },
  profileQuestion: {
    questions: [],
    errors: ''
  },
  singleQuestion: {
    question: {},
    comments: [],
    errors: ''
  },
  currentComment: {
    id: '',
    answer: ''
  }
};
