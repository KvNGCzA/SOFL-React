import React, { Component } from 'react';
import SideBar from '../Sidebar/SideBar';

class SearchPage extends Component {
  render() {
    return (
      <div className="main">

        <div className="site-content">
          <div className="search-cont">
              <h1 className="search-count" />
              <div className="search-results">
                  <ul className="result-list">                
                  </ul>
              </div>
          </div>
        </div>


        <SideBar />
      </div>
    );
  }
}

export default SearchPage;