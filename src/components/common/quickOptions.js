import React, { Component } from 'react';
import '../../js/quickOptions';

class QuickOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e) {

  }

  render() {
    return (
      <div className="quick-options">

        <div className="quick-search option">
            <i className="fas fa-search" id="fa-search" />
            <form className="search" action="" method="get">
                <input type="text" name="search" placeholder="search" />
                <input type="submit" className="" />
            </form>
        </div>

        <div className="quick-question option">
            <i className="fas fa-pencil-alt" />
            <h2>Post a question</h2>

            <div className="question-form">
                <p className="login-info"><a href="/login-signup">Login or Signup</a> to post a question</p>
                <p className="postQuestion-success-message">Question Posted!</p>
                <form className="postquestionform" method="post">
                    <input type="text" name="title" placeholder="Title" value="" required="" />
                    <textarea name="content" rows="8" cols="80" placeholder="Enter your question here" required=""></textarea>
                    <input type="text" name="tags" placeholder="Tags: Seperate multiple tags with commas e.g. ruby, java" value="" required="" />
                    <input type="submit" name="submit" value="Post" />
                </form>
            </div>
        </div>
    </div>
    );
  }
}

export default QuickOptions;
