/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable camelcase */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import formatDate from '../../utils/formatDate';

export class CommentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleLikeButton = this.handleLikeButton.bind(this);
    this.handleDislikeButton = this.handleDislikeButton.bind(this);
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
    const { comments, user, isLoggedIn } = this.props;
    const heading = comments.length < 1 ? 'No answers for this question. Be the first to answer' : 'Answers';
    const body = comments.length < 1 ? '' : (
      comments.map((comment, index) => {
        const {
          answer,
          likes,
          dislikes,
          created_at,
          username
        } = comment;
        return (
          <ul key={String(index)} id="comment-list">
            <li className="comment-cont">
              <p className="comment">{answer}</p>
              <p className="action-buttons" style={user === username || !isLoggedIn ? { display: 'none' } : {}}>
                <span className="like-comment action like-btn" title="Like">
                  <i
                   className={likes === null || likes.indexOf(user) === -1 ? 'far fa-thumbs-up likebutton' : 'fas fa-thumbs-up likebutton'}
                  onClick={this.handleLikeButton} />
                </span>
                <span className="dislike-comment action dislike-btn" title="Dislike">
                  <i
                  className={dislikes === null || dislikes.indexOf(user) === -1 ? 'far fa-thumbs-down dislikebutton' : 'fas fa-thumbs-down dislikebutton'}
                  onClick={this.handleDislikeButton} />
                </span>
                <span className="report action report-btn" title="Mark as Inappropriate">
                  <i className="far fa-flag reportbutton" />
                </span>
              </p>
              <div className="likes-dislikes-cont">
                <span className="answer-likes-count">
                upvotes:
                  {' '}
                  {likes === null ? 0 : likes.length}
                </span>
                <span className="answer-dislikes-count">
                downvotes:
                  {' '}
                  {dislikes === null ? 0 : dislikes.length}
                </span>
              </div>
              <span className="com-meta">
                answer posted by
                {' '}
                <Link to={`/profile/${username}`}>
                  @
                  {username}
                </Link>
                {' '}
                on
                {' '}
                <Link to="#">{formatDate(created_at)}</Link>
              </span>
            </li>
          </ul>
        );
      })
    );

    return (
      <div className="comments">
        <h2>{heading}</h2>
        {body}
      </div>
    );
  }
}


CommentCard.propTypes = {
  user: PropTypes.string,
  comments: PropTypes.array.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

CommentCard.defaultProps = {
  user: ''
};

const mapStateToProps = state => ({
  user: state.user.username,
  isLoggedIn: state.global.isLoggedIn
});


export default connect(mapStateToProps)(CommentCard);
