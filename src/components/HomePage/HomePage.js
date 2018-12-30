import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SidebarComponent from '../Sidebar/SideBar';
import homeActions from '../../actions/homeActions';
import formatDate from '../../utils/formatDate';
import { globalLoading } from '../../actions/globalActions';

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'New'
    };
    this.handleTab = this.handleTab.bind(this);
  }

  componentDidMount() {
    const { fetchQuestions, triggerLoading } = this.props;
    triggerLoading(true);
    fetchQuestions();
  }

  handleTab(e) {
    return this.setState({ current: e.target.textContent });
  }

  render() {
    const { questions, hotQuestions } = this.props;
    const { current } = this.state;
    const presentQuestions = current === 'New' ? questions : hotQuestions;
    return (
      <div className="main">

        <div className="site-content">
          <div className="hPostQues">
            <Link to="/post-question" title="post your question">Post a Question</Link>
          </div>

          <div id="hQuestions">
            <ul className="tab-cont">
              <li><Link onClick={this.handleTab} style={current === 'New' ? { backgroundColor: 'white', color: '#006eff' } : { backgroundColor: '#006eff' }} to="#">New</Link></li>
              <li><Link onClick={this.handleTab} style={current === 'Popular' ? { backgroundColor: 'white', color: '#006eff' } : { backgroundColor: '#006eff' }} to="#">Popular</Link></li>
            </ul>
            <div className="tab all" id="tab1">
              {
                presentQuestions.map((question, index) => (
                  <div className="single-question" key={String(index)}>
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
                      <div className="edit-option-container" />
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
                        <Link to="#">
                          {formatDate(question.created_at)}
                        </Link>
                        by
                        <Link to={`/profile/${question.username}`}>{question.username}</Link>
                      </span>
                    </div>
                  </div>
                ))
              }

            </div>
            <div className="tab new" id="tab2" />
          </div>

        </div>


        <SidebarComponent />
      </div>
    );
  }
}

HomePage.propTypes = {
  questions: PropTypes.array.isRequired,
  hotQuestions: PropTypes.array.isRequired,
  fetchQuestions: PropTypes.func.isRequired,
  triggerLoading: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  questions: state.home.results,
  hotQuestions: state.sidebar.results
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(homeActions()),
  triggerLoading: status => dispatch(globalLoading(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
