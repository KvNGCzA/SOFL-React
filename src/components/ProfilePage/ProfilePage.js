import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SideBar from '../Sidebar/SideBar';
import ProfileCardComponent from '../common/ProfileCard';
import profileAction from '../../actions/profileAction';
import QuestionCardComponent from '../common/QuestionCard';
import userQuestionAction from '../../actions/userQuestionAction';
import { globalLoading } from '../../actions/globalActions';

export class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'Most Recent'
    };
    this.handleTab = this.handleTab.bind(this);
  }

  componentDidMount() {
    const {
      match,
      getUserProfile,
      getUserQuestions,
      loading
    } = this.props;
    loading(true);
    const { username } = match.params;
    getUserProfile(username);
    getUserQuestions(username);
  }

  handleTab(e) {
    this.setState({ currentTab: e.target.textContent });
  }

  render() {
    const { currentTab } = this.state;
    const { profile, userQuestions } = this.props;
    let heading, questions;
    const [allQuestions, mostAnsweredQuestions] = userQuestions;

    if (Object.keys(profile).length < 1 || userQuestions.length < 1) {
      return ('');
    }

    if (currentTab === 'Most Recent') {
      questions = allQuestions;
      heading = `${profile.fullname.split(' ')[0]}'s Recent Questions`;
    } else {
      questions = mostAnsweredQuestions;
      heading = `${profile.fullname.split(' ')[0]}'s Most Answered Questions`;
    }
    // document.body.classList.add('page-profile');

    return (
      <div className="main">
        <div className="lsidebar">
          <ProfileCardComponent profile={profile} />
        </div>

        <div className="site-content profile-page">
          <div className="profile-page-cont">
            <ProfileCardComponent profile={profile} />
            <div id="profile-tab">
              <ul className="tab-cont">
                <li style={currentTab === 'Most Recent' ? { backgroundColor: 'rgb(226, 226, 226)' } : { backgroundColor: 'initial' }}>
                  <Link to="#" onClick={this.handleTab}>Most Recent</Link>
                </li>
                <li style={currentTab !== 'Most Recent' ? { backgroundColor: 'rgb(226, 226, 226)' } : { backgroundColor: 'initial' }}>
                  <Link to="#" onClick={this.handleTab}>Most Answered</Link>
                </li>
              </ul>
              {/* {tab} */}
              <div id="most-recent">
                <h2 className="heading" id="head1">
                  {heading}
                </h2>
                {
                  questions.map((question, index) => (
                    <QuestionCardComponent question={question} key={String(index)} />
                  ))
                }
              </div>
            </div>

          </div>
        </div>

        <SideBar />

      </div>
    );
  }
}

ProfilePage.propTypes = {
  profile: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  getUserProfile: PropTypes.func.isRequired,
  getUserQuestions: PropTypes.func.isRequired,
  loading: PropTypes.func.isRequired,
  userQuestions: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile.profile,
  userQuestions: state.profileQuestion.questions
});

const mapDispatchToProps = dispatch => ({
  getUserProfile: username => dispatch(profileAction(username)),
  getUserQuestions: username => dispatch(userQuestionAction(username)),
  loading: status => dispatch(globalLoading(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
