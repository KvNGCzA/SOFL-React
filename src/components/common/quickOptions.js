import React, { Component } from 'react';
import DefaultSearchForm from './SearchForm';
import '../../../public/js/quickOptions';

class QuickOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
            <p className="login-info">
              <a href="/login-signup">Login or Signup</a>
              {' '}
              to post a question
            </p>
            <p className="postQuestion-success-message">Question Posted!</p>
            <form className="postquestionform" method="post">
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

export default QuickOptions;
