import initialState from '../store/initialState';
import {
  HOME_SUCCESS,
  HOME_FAILURE
} from '../actions/actionTypes';

const { home } = initialState;
const homeReducer = (state = home, action) => {
  const { type } = action;
  switch (type) {
    case HOME_SUCCESS:
    case HOME_FAILURE:
      return {
        ...state,
        results: action.results,
        errors: action.errors
      };
    default:
      return state;
  }
};

export default homeReducer;
