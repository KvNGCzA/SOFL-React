import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import searchAction from '../../actions/searchActions';

export class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    const {
      fetchSearchResults,
      history,
      location,
    } = this.props;

    const { previousQuery } = prevProps;
    const { current } = this.state;

    if (location.pathname !== '/search') {
      history.push(`/search?search=${current}`);
    }
    if (current !== '' && current !== previousQuery) {
      history.push(`/search?search=${current}`);
      fetchSearchResults(current);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    return this.setState({ current: e.target.search.value.trim() });
  }

  render() {
    const { mobile } = this.props;
    return (
      <form className={mobile ? 'mob-search-form search' : 'search'} onSubmit={this.handleSubmit}>
        <input type="text" name="search" placeholder="search" />
        <input type="submit" name="submit" />
      </form>
    );
  }
}


SearchForm.propTypes = {
  mobile: PropTypes.bool.isRequired,
  previousQuery: PropTypes.string.isRequired,
  fetchSearchResults: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  previousQuery: state.searchResults.query
});

const mapDispatchToProps = dispatch => ({
  fetchSearchResults: searchTerm => dispatch(searchAction(searchTerm)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchForm));
