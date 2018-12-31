import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DefaultSearchForm from './SearchForm';
import '../../../public/js/quickOptions';

export class QuickOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <div className="quick-options">

        <div className="quick-search option">
          <i className="fas fa-search" id="fa-search" />
          <DefaultSearchForm mobile={false} />
        </div>

        <div className="quick-question option">
          <i className="fas fa-pencil-alt" />
          <h2>Post a question</h2>
          <div className="question-form">
            <p className="login-info" style={isLoggedIn ? { display: 'none' } : { display: 'block' }}>
              <Link to="/login-signup">Login or Signup</Link>
              {' '}
              to post a question
            </p>
            <p className="postQuestion-success-message">Question Posted!</p>
            <form className="postquestionform" method="post" style={isLoggedIn ? { display: 'block' } : { display: 'none' }}>
              <input type="text" name="title" placeholder="Title" required="" />
              <textarea name="content" rows="8" cols="80" placeholder="Enter your question here" required="" />
              <input type="text" name="tags" placeholder="Tags: Seperate multiple tags with commas e.g. ruby, java" required="" />
              <input type="submit" name="submit" value="Post" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

QuickOptions.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isLoggedIn: state.global.isLoggedIn
});

export default connect(mapStateToProps)(QuickOptions);
