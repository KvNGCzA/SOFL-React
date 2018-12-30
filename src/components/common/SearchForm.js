import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    window.location = `/search?search=${e.target.search.value}`;
  }

  render() {
    const { mobile } = this.props;
    return (
      <form className={mobile ? 'mob-search-form search' : 'search'} id="ok" onSubmit={this.handleSubmit}>
        <input type="text" name="search" placeholder="search" />
        <input type="submit" name="submit" />
      </form>
    );
  }
}


SearchForm.propTypes = {
  mobile: PropTypes.bool.isRequired,
};

export default SearchForm;
