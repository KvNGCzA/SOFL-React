import React, { Component } from 'react';
import SideBar from '../Sidebar/SideBar';

class ProfilePage extends Component {
  render() {
    return (
      <div className="main">
        <div className="lsidebar">

          <div className="side-access-forms">
            <div id="side-signup-form" className="c-forms">
              <h2>Sign Up</h2><span>Have an account? <button id="s-t-login" className="c-t-btn">Login</button> </span>
              <form action="index.html" method="post">
                <input type="text" name="fname" placeholder="First Name" />
                <input type="text" name="lname" placeholder="Last Name" />
                <input type="email" name="email" placeholder="Email" />
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="pwd" placeholder="Password" />
                <input type="button" name="submit" value="Sign Up" />
              </form>
            </div>

            <div id="side-login-form" className="c-forms">
                <h2>Login</h2><span>Don't have an account? <button id="s-t-signup" className="c-t-btn">Sign up</button> </span>
                <form action="index.html" method="post">
                  <input type="text" name="username" placeholder="Username" value="" />
                  <input type="password" name="pwd" value="" placeholder="Password" />
                  <input type="button" name="submit" value="Login" />
                </form>
              </div>
          </div>

          <div className="profile">
            <a href="" className="l-settings" title="Edit your profile"><span>Edit Profile </span><i className="fas fa-cogs"></i></a>
            <div className="profile-picture">
              <div className="profile-image" />
            </div>
            <div className="profile-info">
              <ul>
                <li className="profile-full-name" title="Full Name"></li>
                <li className="profile-username" title="Username"><i className="fas fa-user"></i></li>
                <li className="profile-occupation" title="Occupation"><i className="fas fa-suitcase"></i></li>
                <li className="profile-msince" title="Date Joined"><i className="fas fa-users"></i><span> Joined:</span></li>
                <li className="profile-num-ans" title="Replies Given"><i className="fas fa-check"></i><span> Replied:</span></li>
                <li className="profile-num-que" title="Questions Posted"><i className="fas fa-question"></i><span> Asked:</span></li>
                <li className="profile-num-likes" title="Likes Received"><i className="fas fa-thumbs-up"></i><span> Likes Received:</span></li>
                <li className="profile-visit-profile" title="Visit Your Profile"><a href="/profile">Go to profile</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="site-content">
            <div className="profile-page-cont">

              <div className="profile">
                <a href="" className="l-settings" title="Edit your profile"><span>Edit Profile </span><i className="fas fa-cogs"></i></a>
                <div className="profile-picture">
                  <div className="profile-image" />
                </div>
                <div className="profile-info">
                  <ul>
                    <li className="profile-full-name" title="Full Name"></li>
                    <li className="profile-username"title="Username"><i className="fas fa-user" ></i></li>
                    <li className="profile-occupation"title="Occupation"><i className="fas fa-suitcase" ></i></li>
                    <li className="profile-msince"title="Date Joined"><i className="fas fa-users" ></i><span> Joined:</span></li>
                    <li className="profile-num-ans"title="Replies Given"><i className="fas fa-check" ></i><span> Replied:</span></li>
                    <li className="profile-num-que"title="Questions Posted"><i className="fas fa-question" ></i><span> Asked:</span></li>
                    <li className="profile-visit-profile"title="Visit Your Profile"><a href="/profile" >Go to profile</a></li>
                  </ul>
                </div>
              </div>

              <div id="profile-tab">
                <ul className="tab-cont">
                    <li><a href="#most-recent">Most Recent</a></li>
                    <li><a href="#most-answered">Most Answered</a></li>
                </ul> 
                <div id="most-recent">
                    <h2 className="heading" id="head1" />
                </div>
                <div id="most-answered">
                    <h2 className="heading" id="head2" />
                </div>
              </div>

            </div>
          </div>

        <SideBar />
        
      </div>
    );
  }
}

export default ProfilePage;