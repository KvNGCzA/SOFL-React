/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '../../../public/js/quickOptions';
import formatDate from '../../utils/formatDate';

export class QuestionCard extends Component {
  constructor(props) {
    super(props);
    this.handleEditOption = this.handleEditOption.bind(this);
  }

  handleEditOption(e) {
    const dropDown = e.target.parentElement.nextSibling;
    const dropDownMenus = document.getElementsByClassName('drop-settings');
    for (let x = 0; x < dropDownMenus.length; x += 1) {
      if (dropDownMenus[x] !== dropDown) {
        dropDownMenus[x].style.display = 'none';
      }
    }
    if (dropDown.style.display !== 'block') {
      dropDown.style.display = 'block';
    } else {
      dropDown.style.display = 'none';
    }
  }

  render() {
    const { question, owner } = this.props;
    const dropDown = owner === question.username ? (
      <div className="edit-option-container">
        <span className="edit-option">
          <i onClick={this.handleEditOption} className="fas fa-wrench" />
        </span>
        <ul className="drop-settings">
          <li className="deleteButton">
            <i className="far fa-trash-alt" title="Delete this question" />
            {' '}
            Delete
          </li>
          <li>
            <i className="fas fa-wrench" />
            {' '}
            Edit
          </li>
        </ul>
      </div>
    ) : '';
    return (
      <div className="single-question">
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

        <div className="q-details">
          {dropDown}
          <p className="question-title"><Link to={`/question/${question.id}`} className="gotoQ">{question.title}</Link></p>
          <ul className="tags">
            {
              question.tags.split(',').map((tag, i) => (
                <li key={String(i)}><Link to="#">{tag}</Link></li>
              ))
            }
          </ul>
          <span className="posted-on">
            Posted on
            {' '}
            <Link to="#">
              {formatDate(question.created_at)}
            </Link>
            {' '}
            by
            {' '}
            <Link to={`/profile/${question.username}`}>{question.username}</Link>
          </span>
        </div>
      </div>
    );
  }
}

QuestionCard.propTypes = {
  question: PropTypes.object.isRequired,
  owner: PropTypes.string
};

QuestionCard.defaultProps = {
  owner: ''
};

const mapStateToprops = state => ({
  owner: state.user.username
});
export default connect(mapStateToprops)(QuestionCard);
