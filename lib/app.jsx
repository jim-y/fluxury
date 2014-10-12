/** @jsx React.DOM */
'use strict';

var React = require('react'),
    PirateBadge = require('./components/badge_container.jsx'),
    Actions = require('./actions/Actions'),
    mPromise = require('mpromise'),
    promise = new mPromise();

promise.onResolve(function() {
  React.renderComponent(
    <PirateBadge />,
    document.querySelector('#content')
  );
});

Actions.init(promise);
