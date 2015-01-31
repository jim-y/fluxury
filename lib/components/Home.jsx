'use strict';

var React = require('react'),
  RouteHandler = require('react-router').RouteHandler,
  HeaderComp = require('./HeaderComp.jsx'),
  FooterComp = require('./FooterComp.jsx'),
  Home;

Home = React.createClass({
  render: function() {
    return (
      <div>
        <HeaderComp/>
        <main>
          <RouteHandler/>
        </main>
        <FooterComp/>
      </div>
    );
  }
});

module.exports = Home;
