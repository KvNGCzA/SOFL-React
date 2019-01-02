import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SidebarComponent from '../Sidebar/SideBar';
import homeActions from '../../actions/homeActions';
import formatDate from '../../utils/formatDate';
import { globalLoading } from '../../actions/globalActions';
import QuestionCard from '../common/QuestionCard';

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
                  <QuestionCard question={question} key={String(index)} />
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
