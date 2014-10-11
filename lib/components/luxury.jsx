/** @jsx React.DOM */

(function() {
  'use strict';

  var React = require('react'),
      Fluxury;

  Fluxury = React.createClass({
    render: function() {
      return (
        <div>
          <img src={this.props.imgSrc} width="36" height="36" />
          <h1>Hi dude!</h1>
        </div>
      );
    }
  });

  module.exports = Fluxury;
}());
