import React, { Component } from 'react';
import SideBar from '../Sidebar/SideBar';
import DefaultQuestionForm from '../common/QuestionForm';

class PostQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main">

        <div className="site-content">
          <p className="pageTitle">Post A Question</p>
          <DefaultQuestionForm />
        </div>

        <SideBar />
      </div>
    );
  }
}

export default PostQuestion;
