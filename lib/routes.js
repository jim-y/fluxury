'use strict';

var React = require('react'),
  { Route, DefaultRoute } = require('react-router'),
  { Home, Contact, PirateBadge } = require('./components/Components'),
  { baseUrl } = require('./appConfig');

module.exports = (
  <Route name="home" path={baseUrl} handler={Home}>
    <Route name="pirate" path="pirate" handler={PirateBadge} />
    <Route name="contact" path="contact" handler={Contact} />
    <DefaultRoute handler={PirateBadge} />
  </Route>
);
