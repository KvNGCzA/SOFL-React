import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isLoggedIn, username } = this.props;
    const mainNav = isLoggedIn ? (
      <Fragment>
        <li><Link className="profile-link" to={`/profile/${username}`}>Profile</Link></li>
        <li><Link to="#" className="logout">Logout</Link></li>
      </Fragment>
    ) : (
      <li><Link to="/login-signup">Login</Link></li>
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

        <nav className="mobile-navigation">

          <div className="profile nav-icon">
            <Link className="profile-link" to={`/profile/${username}`}>
              <div className="profile-picture">
                <div className="profile-image" />
              </div>
            </Link>
          </div>

          <div className="mob-search nav-icon">
            <i className="fas fa-search" id="fa-search" />
          </div>


          <div className="dropdown-menu nav-icon">
            <i className="fas fa-bars" />
          </div>

        </nav>

        <form className="mob-search-form search">
          <input className="search-form-input" type="text" name="search" placeholder="search" />
          <input type="submit" name="submit" className="" />
        </form>

        <ul className="dropdown-menu-items">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/post-question">Post A Question</Link></li>
          <li><Link to="/login-signup">Login/Sign Up</Link></li>
          <li><Link to="#" className="logout">Log Out</Link></li>
        </ul>
      </header>
    );
  }
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  username: PropTypes.string
};

Header.defaultProps = {
  username: ''
};

const mapStateToProps = state => ({
  isLoggedIn: state.global.isLoggedIn,
  username: state.user.username
});

export default connect(mapStateToProps)(Header);
