import initialState from '../store/initialState';
import {
  SIDEBAR_SUCCESS,
  SIDEBAR_FAILURE
} from '../actions/actionTypes';

const { sidebar } = initialState;
const sidebarReducer = (state = sidebar, action) => {
  const { type } = action;
  switch (type) {
    case SIDEBAR_SUCCESS:
    case SIDEBAR_FAILURE:
      return {
        ...state,
        results: action.results,
        errors: action.errors
      };
    default:
      return state;
  }
};

export default sidebarReducer;
