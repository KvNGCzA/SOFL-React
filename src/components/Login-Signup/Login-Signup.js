import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SideBar from '../Sidebar/SideBar';
import loginAction from '../../actions/loginAction';
import signupAction from '../../actions/signupAction';
import { globalLoading } from '../../actions/globalActions';

export const LoginForm = (props) => {
  const { handleSwitch, handleLogin } = props;
  return (
    <div id="login-form" className="c-forms">
      <h2>Login</h2>
      <span>
        Don't have an account?
        {' '}
        <button type="button" id="c-t-signup" className="c-t-btn" onClick={handleSwitch}>Sign up</button>
      </span>
      <form id="lg-form" onSubmit={handleLogin}>
        <span id="warning-message2" />
        <input name="email" placeholder="Email" autoComplete="true" type="email" required />
        <input name="pwd" placeholder="Password" autoComplete="true" type="password" required />
        <input name="submit" value="Login" type="submit" />
      </form>
    </div>
  );
};

export const SignUpForm = (props) => {
  const { handleSwitch, handleSignup } = props;
  return (
    <div id="signup-form" className="c-forms">
      <h2>Sign Up</h2>
      <span>
        Have an account?
        {' '}
        <button type="button" id="c-t-login" className="c-t-btn" onClick={handleSwitch}>Login</button>
      </span>
      <form id="su-form" onSubmit={handleSignup}>
        <span id="warning-message" />
        <input name="fname" placeholder="First Name" type="text" required />
        <input name="lname" placeholder="Last Name" type="text" required />
        <input name="occupation" placeholder="Occupation" type="text" />
        <input name="email" placeholder="Email" type="email" required />
        <input name="username" placeholder="Username" type="text" required />
        <input name="pwd" placeholder="Password" type="password" required />
        <input type="file" accept="image/jpeg, image/png, image/jpg" name="profileImage" />
        <input name="submit" value="Sign Up" type="submit" />
      </form>
    </div>
  );
};

export class LoginSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'Login'
    };
    this.handleSwitch = this.handleSwitch.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleSwitch(e) {
    return this.setState({ current: e.target.textContent });
  }

  handleLogin(e) {
    e.preventDefault();
    const { loginUser, triggerLoading } = this.props;
    triggerLoading(true);
    const userObject = {
      email: e.target.email.value,
      password: e.target.pwd.value
    };
    loginUser(userObject);
  }

  handleSignup(e) {
    e.preventDefault();
    const { signupUser, triggerLoading } = this.props;
    triggerLoading(true);
    const formData = new FormData();
    const keys = [
      'firstName',
      'lastName',
      'email',
      'password',
      'username',
      'occupation',
      'profileImage'
    ];
    const values = [
      e.target.fname.value,
      e.target.lname.value,
      e.target.email.value,
      e.target.pwd.value,
      e.target.username.value,
      e.target.occupation.value,
      e.target.profileImage.files[0]
    ];
    for (let x = 0; x < keys.length; x += 1) {
      formData.append(keys[x], values[x]);
    }
    signupUser(formData);
  }

  render() {
    const { current } = this.state;
    const { isLoggedIn } = this.props;
    if (isLoggedIn) {
      return (
        <Redirect to="/" />
      );
    }
    const body = current === 'Login' ? <LoginForm handleLogin={this.handleLogin} handleSwitch={this.handleSwitch} /> : <SignUpForm handleSignup={this.handleSignup} handleSwitch={this.handleSwitch} />;
    return (
      <div className="main">
        <div className="site-content">
          <div className="login-signup-cont">
            {body}
          </div>
        </div>
        <SideBar />
      </div>
    );
  }
}

LoginForm.propTypes = {
  handleSwitch: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

SignUpForm.propTypes = {
  handleSwitch: PropTypes.func.isRequired,
  handleSignup: PropTypes.func.isRequired,
};

LoginSignup.propTypes = {
  loginUser: PropTypes.func.isRequired,
  triggerLoading: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  signupUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.global.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  loginUser: userObject => dispatch(loginAction(userObject)),
  signupUser: userObject => dispatch(signupAction(userObject)),
  triggerLoading: status => dispatch(globalLoading(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginSignup);
