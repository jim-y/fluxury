/** @jsx React.DOM */

(function() {
  'use strict';

  var React = require('react'),
      Fluxury = require('./components/luxury.jsx');

  React.renderComponent(
    <Fluxury imgSrc='./assets/images/logo.svg' />,
    document.querySelector('#content')
  );
}());
