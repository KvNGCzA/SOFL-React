import React, { Component, Fragment } from 'react';
import { toastr } from 'react-redux-toastr';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DefaultSearchForm from '../SearchForm';
import { globalLoggedIn } from '../../../actions/globalActions';
import '../../../../public/js/mobileNavigation';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.logOutUser = this.logOutUser.bind(this);
  }

  logOutUser() {
    const { logOutAction } = this.props;
    logOutAction();
    localStorage.clear();
    return toastr.success('Goodbye! Come back soon');
  }

  render() {
    const { isLoggedIn, username, profileImage } = this.props;
    const mainNav = isLoggedIn ? (
      <Fragment>
        <li><Link className="profile-link" to={`/profile/${username}`}>Profile</Link></li>
        <li><Link to="#" className="logout" onClick={this.logOutUser}>Logout</Link></li>
      </Fragment>
    ) : (
      <li><Link to="/login-signup">Login</Link></li>
    );

    const profileCont = isLoggedIn ? (
      <div className="profile nav-icon">
        <Link className="profile-link" to={`/profile/${username}`}>
          <div className="profile-picture">
            <div className="profile-image" style={{ backgroundImage: `url(https://safe-inlet-99347.herokuapp.com/images/${profileImage})` }} />
          </div>
        </Link>
      </div>
    ) : '';

    const mobNav = isLoggedIn ? (
      <Fragment>
        <li><Link to="/post-question">Post A Question</Link></li>
        <li><Link to="#" className="logout" onClick={this.logOutUser}>Log Out</Link></li>
      </Fragment>
    ) : (
      <li><Link to="/login-signup">Login/Sign Up</Link></li>
    );

    return (
      <header>
        <h2 className="welcome"><Link to="/">stackOverflowLite</Link></h2>

        <nav className="main-navigation">
          <ul>
            <li><Link to="/">Home</Link></li>
            {mainNav}
          </ul>
        </nav>

        <nav className="mobile-navigation" style={isLoggedIn ? { top: '-0.8em' } : { top: 'initial' }}>

          {profileCont}

          <div className="mob-search nav-icon">
            <i className="fas fa-search" id="fa-search" />
          </div>


          <div className="dropdown-menu nav-icon">
            <i className="fas fa-bars" />
          </div>

        </nav>

        <DefaultSearchForm mobile />

        <ul className="dropdown-menu-items">
          <li><Link to="/">Home</Link></li>
          {mobNav}
        </ul>
      </header>
    );
  }
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  username: PropTypes.string,
  profileImage: PropTypes.string,
  logOutAction: PropTypes.func.isRequired,
};

Header.defaultProps = {
  username: '',
  profileImage: ''
};

const mapStateToProps = state => ({
  isLoggedIn: state.global.isLoggedIn,
  username: state.user.username,
  profileImage: state.user.profileimage
});

const mapDispatchToProps = dispatch => ({
  logOutAction: () => dispatch(globalLoggedIn(false))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
