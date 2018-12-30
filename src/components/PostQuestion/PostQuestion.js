import React, { Component } from 'react';
import SideBar from '../Sidebar/SideBar';

class PostQuestion  extends Component {
  render() {
    return (
      <div className="main">

        <div className="site-content">
          <p className="pageTitle">Post A Question</p>
          <p />
            <div className="question-form">
                <p className="login-info"><a href="/login-signup">Login or Signup</a> to post a question</p>
                <p className="postQuestion-success-message">Question Posted!</p>
                <form className="postquestionform" method="post">
                    <input type="text" name="title" placeholder="Title" value="" required />
                    <textarea name="content" rows="8" cols="80" placeholder="Enter your question here" required></textarea>
                    <input type="text" name="tags" placeholder="Tags: Seperate multiple tags with commas e.g. ruby, java" value="" required />
                    <input type="submit" name="submit" value="Post" />
                </form>
              </div>
        </div>
        
          <SideBar />
      
      </div>
    );
  }
}

export default PostQuestion ;