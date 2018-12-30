import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <p><i className="fas fa-copyright"></i> stackOverFlowLite {new Date().getFullYear()}</p>
      </footer>
    );
  }
}

export default Footer;