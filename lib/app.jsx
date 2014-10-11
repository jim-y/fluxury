/** @jsx React.DOM */

(function() {
  'use strict';

  var React = require('react'),
      Fluxury = require('./components/luxury.jsx');

  React.renderComponent(
    <Fluxury />,
    document.querySelector('#content')
  );
}());
