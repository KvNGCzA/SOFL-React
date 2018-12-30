import { SAVE_USER_INFO } from './actionTypes';

const userAction = user => ({
  type: SAVE_USER_INFO,
  user,
});

export default userAction;
