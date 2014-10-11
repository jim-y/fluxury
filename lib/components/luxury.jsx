/** @jsx React.DOM */

(function() {
  'use strict';

  var React = require('react'),
      Fluxury;

  Fluxury = React.createClass({
    render: function() {
      return (
        <h1>Hi dude!</h1>
      );
    }
  });

  module.exports = Fluxury;
}());
