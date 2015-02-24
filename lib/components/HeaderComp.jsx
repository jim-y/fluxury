'use strict';

var React = require('react'),
  Header;

Header = React.createClass({

  render() {
    return (
      <div>
        <header>
          <h2>Fluxury :: React-Flux skeleton application with immutability and routing.</h2>
        </header>
      </div>
    );
  }

});

module.exports = Header;
