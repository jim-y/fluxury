'use strict';

var React = require('react'),
  Badge = require('./Badge.jsx'),
  Widget = require('./Widget.jsx'),
  AppConstants = require('../AppConstants'),
  PirateStore = require('../stores/PirateStore'),
  PirateBadge;

function getState() {
  return {
    pirate: PirateStore.getPirate()
  };
}

PirateBadge = React.createClass({

  getInitialState: function() {
    return getState();
  },

  componentDidMount: function() {
    PirateStore.on(AppConstants.CHANGE_EVENT, this._onChange);
  },

  componentWillUnmount: function() {
    PirateStore.removeListener(AppConstants.CHANGE_EVENT, this._onChange);
  },

  _onChange: function() {
    this.setState(getState());
  },

  render: function() {
    return (
      <div>
        <Widget/>
        <Badge pirate={this.state.pirate} />
      </div>
    );
  }

});

module.exports = PirateBadge;
