/* eslint-disable camelcase */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import formatDate from '../../utils/formatDate';

class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { profile } = this.props;
    const {
      username,
      fullname,
      created_at,
      asked_count,
      answered_count,
      occupation,
      profileimage
    } = profile;
    return (
      <div className="profile">
        <Link to="" className="l-settings" title="Edit your profile">
          <span>Edit Profile </span>
          <i className="fas fa-cogs" />
        </Link>
        <div className="profile-picture">
          <div className="profile-image" style={{ backgroundImage: `url(https://safe-inlet-99347.herokuapp.com/images/${profileimage})` }} />
        </div>
        <div className="profile-info">
          <ul>
            <li className="profile-full-name" title="Full Name">{fullname}</li>
            <li className="profile-username" title="Username">
              <i className="fas fa-user" />
              {' '}
              {username}
            </li>
            <li className="profile-occupation" title="Occupation">
              <i className="fas fa-suitcase" />
              {' '}
              {occupation}
            </li>
            <li className="profile-msince" title="Date Joined">
              <i className="fas fa-users" />
              <span> Joined:</span>
              {' '}
              {formatDate(created_at)}
            </li>
            <li className="profile-num-ans" title="Replies Given">
              <i className="fas fa-check" />
              <span> Replied:</span>
              {' '}
              { answered_count}
            </li>
            <li className="profile-num-que" title="Questions Posted">
              <i className="fas fa-question" />
              <span> Asked:</span>
              {' '}
              {asked_count}
            </li>
            <li className="profile-num-likes" title="Likes Received">
              <i className="fas fa-thumbs-up" />
              <span> Likes Received:</span>
            </li>
            <li className="profile-visit-profile" title="Visit Your Profile">
              <Link to="/profile">Go to profile</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}


ProfileCard.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileCard;
