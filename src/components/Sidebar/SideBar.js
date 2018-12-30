import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import sidebarAction from '../../actions/sidebarActions';

class Sidebar extends Component {
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
    return (
      <div className="side-bar">
        <div className="hot-questions">
          <h3>Hot Questions</h3>
          <ul id="hot-questions">
            {
              hotQuestions.map((question, index) => (
                <li key={String(index)}>
                  <i className="fab fa-gripfire"></i>
                  <Link to={`/question/${question.id}`}> {question.title}</Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  hotQuestions: PropTypes.array.isRequired
}

const mapStateToProps = state => ({ hotQuestions: state.sidebar.results });

const mapDispatchToProps = dispatch => ({
  fetchHotQuestions: () => dispatch(sidebarAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);