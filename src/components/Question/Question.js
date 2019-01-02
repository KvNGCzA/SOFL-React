/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { globalLoading } from '../../actions/globalActions';
import questionAction from '../../actions/questionAction';
import SideBar from '../Sidebar/SideBar';
import formatDate from '../../utils/formatDate';
import CommentCard from './CommentCard';
import CommentFormComponent from './CommentForm';

export class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleLikeButton = this.handleLikeButton.bind(this);
    this.handleDislikeButton = this.handleDislikeButton.bind(this);
  }

  componentDidMount() {
    const { fetchQuestion, match, loading } = this.props;
    const { id } = match.params;
    loading(true);
    fetchQuestion(id);
  }

  componentDidUpdate(prevProps) {
    const {
      fetchQuestion,
      match,
      location,
      loading
    } = this.props;
    const { id } = match.params;
    if (prevProps.location.pathname !== location.pathname) {
      loading(true);
      fetchQuestion(id);
    }
  }

  handleLikeButton(e) {
    const className = e.target.classList.value;
    if (className === 'far fa-thumbs-up likebutton') {
      e.target.classList = 'fas fa-thumbs-up likebutton';
    } else {
      e.target.classList = 'far fa-thumbs-up likebutton';
    }
  }

  handleDislikeButton(e) {
    const className = e.target.classList.value;
    if (className === 'far fa-thumbs-down dislikebutton') {
      e.target.classList = 'fas fa-thumbs-down dislikebutton';
    } else {
      e.target.classList = 'far fa-thumbs-down dislikebutton';
    }
  }

  render() {
    const {
      user,
      question,
      comments,
      isLoggedIn,
      match
    } = this.props;
    if (Object.keys(question).length < 1) {
      return '';
    }
    return (
      <div className="main">

        <div className="site-content">
          <div className="single-question-page">
            <h1 className="question-title">{question.title}</h1>
            <div className="q-meta">
              <ul>
                <li className="answer-count">
                  <Link to="#">Answers</Link>
                  <Link to="#" className={question.answers_count > 0 ? 'answer-count-dis answered' : 'answer-count-dis'}>{question.answers_count}</Link>
                </li>
                <li className="likes-count">
                  <Link to="#">UpVotes</Link>
                  <Link to="#" className={question.likes !== null && question.likes.length > 0 ? 'likes-count-dis liked' : 'likes-count-dis'}>{question.likes === null ? 0 : question.likes.length}</Link>
                </li>
                <li className="views-count">
                  <Link to="#">DownVotes</Link>
                  <Link to="#" className={question.dislikes !== null && question.dislikes.length > 0 ? 'views-count-dis viewed' : 'views-count-dis'}>{question.dislikes === null ? 0 : question.dislikes.length}</Link>
                </li>
              </ul>
            </div>
            <div className="question-cont">
              <p className="question-body">
                {question.content}
              </p>
              <div className="action-meta-cont">
                <div className="action-buttons" style={question.username === user || !isLoggedIn ? { display: 'none' } : {}}>
                  <span className="like-question action like-btn" title="Like">
                    <i
                      className={question.likes === null || question.likes.indexOf(user) === -1 ? 'far fa-thumbs-up likebutton' : 'fas fa-thumbs-up likebutton'}
                      onClick={this.handleLikeButton}
                    />
                  </span>
                  <span className="dislike-question action dislike-btn" title="Dislike">
                    <i
                      className={question.dislikes === null || question.dislikes.indexOf(user) === -1 ? 'far fa-thumbs-down dislikebutton' : 'fas fa-thumbs-down dislikebutton'}
                      onClick={this.handleDislikeButton}
                    />
                  </span>
                  <span className="report action report-btn" title="Mark as Inappropriate">
                    <i className="far fa-flag reportbutton" />
                  </span>
                </div>
                <div className="meta-cont" style={question.username === user || !isLoggedIn ? { width: '100%' } : {}}>
                  <span className="date-posted">
                    <span>{formatDate(question.created_at)}</span>
                    {' '}
                    by
                    {' '}
                    <span>
                      <Link to={`/profile/${question.username}`}>
                        @
                        {question.username}
                      </Link>
                    </span>
                  </span>
                  <ul className="tags">
                    {question.tags.split(',').map((tag, index) => (
                      <li key={String(index)}>
                        <Link to="#">{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <CommentCard comments={comments} />
            <CommentFormComponent match={match} />
          </div>
        </div>
        <SideBar />

      </div>
    );
  }
}

Question.propTypes = {
  user: PropTypes.string,
  question: PropTypes.object,
  match: PropTypes.object.isRequired,
  fetchQuestion: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
  loading: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
};

Question.defaultProps = {
  user: '',
  question: {}
};

const mapStateToProps = state => ({
  user: state.user.username,
  question: state.singleQuestion.question,
  comments: state.singleQuestion.comments,
  isLoggedIn: state.global.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  fetchQuestion: id => dispatch(questionAction(id)),
  loading: status => dispatch(globalLoading(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
