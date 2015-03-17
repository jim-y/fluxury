'use strict';

import React from 'react';
import Badge from './Badge.jsx';
import Widget from './Widget.jsx';
import { CHANGE_EVENT } from '../AppConstants';
import PirateStore from '../stores/PirateStore';

/**
 * Gets the current state. That is, gets the current pirate from the store.
 * @returns {Object.<string, Map>}
 */
const _getState = () => ({ pirate: PirateStore.getPirate() });

export default class PirateBadge extends React.Component {

  constructor() {
    this.state = _getState();
  }

  componentDidMount() {
    PirateStore.on(CHANGE_EVENT, this._onChange.bind(this));
  }

  componentWillUnmount() {
    PirateStore.removeListener(CHANGE_EVENT, this._onChange.bind(this));
  }

  /**
   * When the store changed its state, we are fetching the new state from it.
   * @private
   */
  _onChange() {
    this.setState(_getState());
  }

  /**
   * Renders the PirateBadge component. The container with the inputs and the
   * red and white badge item.
   * @return {ReactElement}
   */
  render() {
    return (
      <div>
        <Widget/>
        <Badge pirate={this.state.pirate}/>
      </div>
    );
  }

}
