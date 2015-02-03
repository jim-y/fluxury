'use strict';

var React = require('react'),
  Header;

Header = React.createClass({
  render: function() {
    return (
      <div>
        <header>
          <h1>Fluxury React-Flux skeleton application with immutability and Routing.</h1>
        </header>
      </div>
    );
  }
});

module.exports = Header;
