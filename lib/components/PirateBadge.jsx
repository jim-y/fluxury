'use strict';

import React from 'react';
import Badge from './Badge.jsx';
import Widget from './Widget.jsx';
import AppConstants from '../AppConstants';
import PirateStore from '../stores/PirateStore';

/**
 * Gets the current state. That is, gets the current pirate from the store
 * @returns {Object.<string, Immutable.Map>}
 */
function getState() {
  return {
    pirate: PirateStore.getPirate()
  };
}

export default React.createClass({

  getInitialState() {
    return getState();
  },

  componentDidMount() {
    PirateStore.on(AppConstants.CHANGE_EVENT, this._onChange);
  },

  componentWillUnmount() {
    PirateStore.off(AppConstants.CHANGE_EVENT, this._onChange);
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
