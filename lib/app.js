/** @jsx React.DOM */
'use strict';

var React = require('react'),
    PirateBadge = require('./components/badge_container.jsx');

window.React = React;

React.renderComponent(
  PirateBadge(),
  document.querySelector('#content')
);
