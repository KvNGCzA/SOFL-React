import React from 'react';

const Footer = () => (
  <footer>
    <p>
      <i className="fas fa-copyright" />
      {' '}
      stackOverFlowLite
      {' '}
      {new Date().getFullYear()}
    </p>
  </footer>
);

export default Footer;
