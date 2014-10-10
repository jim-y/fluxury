/** @jsx React.DOM */
/* jshint -W097 */

'use strict';

var React = require('react');
window.React = React;

var MyComponent = require('./components/welcomeComponent.jsx');

React.renderComponent(<MyComponent />, document.getElementById('content'));
