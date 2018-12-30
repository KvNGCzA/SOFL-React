import { toastr } from 'react-redux-toastr';

import requestOptions from '../utils/requestOptions';
import { globalLoggedIn, globalFailure, globalLoading } from './globalActions';
import userAction from './userActions';

const loginAction = userObject => dispatch => fetch(`${process.env.API_BASE_URL}/auth/login`, requestOptions(userObject, 'POST', null))
  .then(
    res => res.json(),
    () => toastr.error('An error has occured, please try again!')
  )
  .then((user) => {
    if (user.profile) {
      user.profile.password = undefined;
      const { token } = user;
      const userObj = {
        ...user.profile,
        token
      };
      localStorage.setItem('user', JSON.stringify(userObj));
      dispatch(userAction(userObj));
      dispatch(globalLoggedIn(true));
      toastr.success(`Dear ${user.profile.fullname}, Welcome to StackOverflow Lite`);
      return dispatch(globalLoading(false));
    }
    toastr.error(user.message);
    return dispatch(globalFailure(user.message));
  });

export default loginAction;
