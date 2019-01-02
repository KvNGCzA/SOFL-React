import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { globalLoading } from '../../actions/globalActions';
import commentAction, { commentInProgress } from '../../actions/commentActions';

export class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleComment = this.handleComment.bind(this);
    this.handleCommentInput = this.handleCommentInput.bind(this);
  }

  handleComment(e) {
    e.preventDefault();
    const { postComment, match, loading } = this.props;
    const { id } = match.params;
    loading(true);
    const answer = {
      answer: e.target.answer.value
    };
    postComment(id, answer);
  }

  handleCommentInput(e) {
    const { inProgress, match } = this.props;
    const { id } = match.params;
    inProgress(id, e.target.value);
  }

  render() {
    const { isLoggedIn, currentComment, match } = this.props;
    const { id } = match.params;
    const body = isLoggedIn ? (
      <form className="comment-form" onSubmit={this.handleComment}>
        <h2>Post an Answer</h2>
        <p id="success-answer" />
        <textarea name="answer" placeholder="Enter your answer here..." value={id === currentComment.id ? currentComment.answer : ''} onChange={this.handleCommentInput} />
        <input type="submit" name="submit" value="Post" />
      </form>
    ) : (
      <h4 style={{ margin: '2em 0 0', textAlign: 'center', color: '#6b6b6b' }}>
        <Link to="/login-signup" style={{ color: '#006eff' }}>Log/Signup</Link>
        {' '}
        to Stackoverflow Lite to answer this question.
      </h4>
    );

    return body;
  }
}


CommentForm.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  postComment: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  loading: PropTypes.func.isRequired,
  inProgress: PropTypes.func.isRequired,
  currentComment: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.global.isLoggedIn,
  currentComment: state.currentComment
});

const mapDispatchToProps = dispatch => ({
  postComment: (comment, id) => dispatch(commentAction(comment, id)),
  loading: status => dispatch(globalLoading(status)),
  inProgress: (id, answer) => dispatch(commentInProgress(id, answer))
});


export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
