'use strict';

var React = require('react'),
    PirateBadge = require('./components/piratebadge.jsx');

window.React = React;

React.renderComponent(
  PirateBadge(),
  document.querySelector('#content')
);
