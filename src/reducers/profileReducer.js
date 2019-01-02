import initialState from '../store/initialState';
import { GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE } from '../actions/actionTypes';

const { profile } = initialState;
const profileReducer = (state = profile, action) => {
  const { type } = action;
  switch (type) {
    case GET_PROFILE_SUCCESS:
    case GET_PROFILE_FAILURE:
      return {
        ...state,
        profile: action.profile,
        errors: action.errors
      };
    default:
      return state;
  }
};

export default profileReducer;
