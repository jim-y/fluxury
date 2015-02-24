'use strict';

var React = require('react'),
  { Link } = require('react-router'),
  Footer;

Footer = React.createClass({

  render() {
    return (
      <div>
        <footer>
          <Link to="contact">Contact</Link>
        </footer>
      </div>
    );
  }

});

module.exports = Footer;
