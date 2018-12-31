import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import searchAction from '../../actions/searchActions';
import SideBar from '../Sidebar/SideBar';

export class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { location, fetchSearchResults, previousQuery } = this.props;
    const query = queryString.parse(location.search);
    if (query.search && previousQuery !== query.search) {
      // fetch search results here
      fetchSearchResults(query.search);
    }
  }

  render() {
    const { searchResults, location } = this.props;
    const query = queryString.parse(location.search);
    return (
      <div className="main">
        <div className="site-content">
          <div className="search-cont">
            <h1 className="search-count">{`${searchResults.length} Search Result(s): ${query.search}`}</h1>
            <div className="search-results">
              <ul className="result-list">
                {
                  searchResults.length < 1 ? 'There are no results for this search'
                    : searchResults.map((question, index) => (
                      <li className="result" key={String(index)}>
                        <p>
                          <Link to={`/question/${question.id}`}>{question.title}</Link>
                        </p>
                        <ul className="tags">
                          {
                            question.tags.split(',').map((tag, i) => (
                              <li key={String(i)}>
                                <Link to="#">{tag}</Link>
                              </li>
                            ))
                          }
                        </ul>
                      </li>
                    ))
                }
              </ul>
            </div>
          </div>
        </div>

        <SideBar />
      </div>
    );
  }
}

SearchPage.propTypes = {
  location: PropTypes.object.isRequired,
  fetchSearchResults: PropTypes.func.isRequired,
  searchResults: PropTypes.array.isRequired,
  previousQuery: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  searchResults: state.searchResults.results,
  previousQuery: state.searchResults.query
});

const mapDispatchToProps = dispatch => ({
  fetchSearchResults: searchTerm => dispatch(searchAction(searchTerm)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
