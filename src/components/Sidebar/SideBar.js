import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import sidebarAction from '../../actions/sidebarActions';

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { fetchHotQuestions } = this.props;
    fetchHotQuestions();
  }

  render() {
    const { hotQuestions } = this.props;
    const body = hotQuestions.length < 1 ? (
      <li>
        <Link to="#">
          No hot questions now
        </Link>
      </li>
    ) : (
      hotQuestions.map((question, index) => (
        <li key={String(index)}>
          <i className="fab fa-gripfire" />
          <Link to={`/question/${question.id}`}>
            {question.title}
          </Link>
        </li>
      ))
    );
    return (
      <div className="side-bar">
        <div className="hot-questions">
          <h3>Hot Questions</h3>
          <ul id="hot-questions">
            {body}
          </ul>
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  hotQuestions: PropTypes.array.isRequired,
  fetchHotQuestions: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ hotQuestions: state.sidebar.results });

const mapDispatchToProps = dispatch => ({
  fetchHotQuestions: () => dispatch(sidebarAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
