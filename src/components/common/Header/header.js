import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <header>
        <h2 className="welcome"><Link to="/">stackOverflowLite</Link></h2>

        <nav className="main-navigation">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link className="profile-link" to="">Profile</Link></li>
            <li><Link to="#" className="logout">Logout</Link></li>
            <li><Link to="/login-signup">Login</Link></li>
          </ul>
        </nav>

        <nav className="mobile-navigation">

          <div className="profile nav-icon">
            <Link className="profile-link" to="">
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

export default Header;