import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import postQuestion, { postQuestionInProgress } from '../../actions/postQuestionAction';
import { globalLoading } from '../../actions/globalActions';

export class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleInput = this.handleTitleInput.bind(this);
    this.handleContentInput = this.handleContentInput.bind(this);
    this.handleTagsInput = this.handleTagsInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { sendQuestion, loading, history } = this.props;
    const questionBody = {
      title: e.target.title.value,
      content: e.target.content.value,
      tags: e.target.tags.value
    };
    loading(true);
    sendQuestion(questionBody, history);
  }

  handleTitleInput(e) {
    const { handleProgress } = this.props;
    handleProgress({ title: e.target.value });
  }

  handleContentInput(e) {
    const { handleProgress } = this.props;
    handleProgress({ content: e.target.value });
  }

  handleTagsInput(e) {
    const { handleProgress } = this.props;
    handleProgress({ tags: e.target.value });
  }

  render() {
    const { isLoggedIn, postState } = this.props;
    return (
      <div className="question-form">
        <p className="login-info" style={isLoggedIn ? { display: 'none' } : { display: 'block' }}>
          <Link to="/login-signup">Login or Signup</Link>
          {' '}
          to post a question
        </p>
        <p className="postQuestion-success-message">Question Posted!</p>
        <form className="postquestionform" style={isLoggedIn ? { display: 'block' } : { display: 'none' }} onSubmit={this.handleSubmit}>
          <input type="text" name="title" placeholder="Title" onChange={this.handleTitleInput} value={postState.title} required />
          <textarea name="content" rows="8" cols="80" placeholder="Enter your question here" onChange={this.handleContentInput} value={postState.content} required />
          <input type="text" name="tags" placeholder="Tags: Seperate multiple tags with commas e.g. ruby, java" onChange={this.handleTagsInput} value={postState.tags} required />
          <input type="submit" name="submit" value="Post" />
        </form>
      </div>
    );
  }
}

QuestionForm.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  postState: PropTypes.object.isRequired,
  sendQuestion: PropTypes.func.isRequired,
  loading: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  handleProgress: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.global.isLoggedIn,
  postState: state.postQuestion,
});

const mapDispatchToProps = dispatch => ({
  handleProgress: payload => dispatch(postQuestionInProgress(payload)),
  sendQuestion: (questionObject, history) => dispatch(postQuestion(questionObject, history)),
  loading: status => dispatch(globalLoading(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(QuestionForm));
