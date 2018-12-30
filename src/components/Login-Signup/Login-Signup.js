import React, { Component } from 'react';
import SideBar from '../Sidebar/SideBar';

const LoginForm = (props) => {
  const { handleSwitch } = props;
  return (
    <div id="login-form" className="c-forms">
      <h2>Login</h2><span>Don't have an account? <button id="c-t-signup" className="c-t-btn" onClick={handleSwitch}>Sign up</button> </span>
      <form id="lg-form">
        <span id="warning-message2" />
        <input name="email" placeholder="Email" value="" type="text" required />
        <input name="pwd" value="" placeholder="Password" type="password" required />
        <input name="submit" value="Login" type="submit" />
      </form>
    </div>
  );
};

const SignUpForm = (props) => {
  const { handleSwitch } = props;
  return (
    <div id="signup-form" className="c-forms">
      <h2>Sign Up</h2><span>Have an account? <button id="c-t-login" className="c-t-btn" onClick={handleSwitch}>Login</button> </span>
      <form id ="su-form" method="post">
        <span id="warning-message"></span>
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

class LoginSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'Login'
    };
    this.handleSwitch = this.handleSwitch.bind(this);
  }

  handleSwitch(e) {
   return this.setState({ current: e.target.textContent });
  }

  render() {
    const { current } = this.state
    const body = current === 'Login' ? <LoginForm handleSwitch={this.handleSwitch} /> : <SignUpForm handleSwitch={this.handleSwitch} />;
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

export default LoginSignup;