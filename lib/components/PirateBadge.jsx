'use strict';

var React = require('react'),
  Badge = require('./Badge.jsx'),
  Widget = require('./Widget.jsx'),
  AppConstants = require('../AppConstants'),
  PirateStore = require('../stores/PirateStore'),
  PirateBadge;

/**
 * Gets the current state. That is, gets the current pirate from the store
 * @returns {Object}
 */
let getState = () => ({ pirate: PirateStore.getPirate() });

PirateBadge = React.createClass({

  getInitialState() {
    return getState();
  },

  componentDidMount() {
    PirateStore.on(AppConstants.CHANGE_EVENT, this._onChange);
  },

  componentWillUnmount() {
    PirateStore.removeListener(AppConstants.CHANGE_EVENT, this._onChange);
  },

  _onChange() {
    this.setState(getState());
  },

  render() {
    return (
      <div>
        <Widget/>
        <Badge pirate={this.state.pirate} />
      </div>
    );
  }

});

module.exports = PirateBadge;
