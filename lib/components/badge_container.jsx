/** @jsx React.DOM */
'use strict';

var React = require('react'),
    Widget = require('./widget.jsx'),
    Badge = require('./badge.jsx'),
    Store = require('../stores/Store'),
    Container;

function getState() {
  return {
    pirate: Store.getPirate()
  };
}

Container = React.createClass({

  getInitialState: function() {
    return getState();
  },

  componentDidMount: function() {
    Store.initialize();
    Store.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    Store.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(getState());
  },

  render: function() {
    return (
      <div>
        <Widget cname="widgets" />
        <Badge cname="badge" pirate={this.state.pirate} />
      </div>
    );
  }

});

module.exports = Container;
