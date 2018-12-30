import React, { Component } from 'react';
import SideBar from '../Sidebar/SideBar';

class Question extends Component {
  render() {
    return (
      <div className="main">

        <div className="site-content">
          <div className="single-question-page">
            <h1 className="question-title" />
            <div className="q-meta" />
            <div className="question-cont">
              <p className="question-body"></p>
              <div className="action-meta-cont" />
            </div>
            <div className="comments">
              <h2>Answers</h2>
              <ul id="comment-list" />
            </div>
            <form className="comment-form">
              <h2>Post an Answer</h2>
              <p id="success-answer"></p>
              <textarea name="answer" placeholder="Enter your answer here..."></textarea>
              <input type="submit" name="submit" value="Post" />
            </form>
          </div>
        </div>
      
        <SideBar />

      </div>
    );
  }
}

export default Question;