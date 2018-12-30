import initialState from '../store/initialState';
import { SAVE_USER_INFO } from '../actions/actionTypes';

const { userInfo } = initialState;
const userReducer = (state = userInfo, action) => {
  const { type } = action;
  switch (type) {
    case SAVE_USER_INFO:
      return {
        ...state,
        ...action.user
      };
    default:
      return state;
  }
};

export default userReducer;
