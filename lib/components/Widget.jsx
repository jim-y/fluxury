'use strict';

import React from 'react';
import fireAction from '../ActionCreators';
import { CREATE, RANDOM } from '../AppConstants';

export default class Widget extends React.Component {

  /**
   * Fires the RANDOM action on random button click
   * @param {Event} [event] - the click event object
   * @private
   */
  _createRandomPirate(event) {
    fireAction(RANDOM, {});
  }

  /**
   * Fires the CREATE action
   * @param {Event} [event] - the change event object
   * @private
   */
  _createNewPirate(event) {
    const pirateName = event.target.value,
      randomBtn = React.findDOMNode(this._randomBtn);

    if (pirateName !== '') {
      randomBtn.setAttribute('disabled', 'true');
    }
    else {
      randomBtn.removeAttribute('disabled');
    }

    fireAction(CREATE, pirateName);
  }

  /**
   * Markup for the PirateBadge Widget. The input field with the button.
   * @return {ReactElement}
   */
  render() {
    return (
      <div className="widgets">
        <div>
          <input
            type="text"
            maxLength="15"
            onChange={this._createNewPirate.bind(this)}/>
        </div>
        <div>
          <button
            ref={(b) => this._randomBtn = b}
            onClick={this._createRandomPirate.bind(this)}>
            Aye! Gimme a name!
          </button>
        </div>
      </div>
    );
  }

}
