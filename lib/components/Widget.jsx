'use strict';

import React from 'react';
import ActionCreators from '../ActionCreators';
import AppConstants from '../AppConstants';

export default React.createClass({

  /**
   * Fires the RANDOM action ob button click
   * @private
   */
  _handleClick() {
    ActionCreators.fire(AppConstants.RANDOM, {});
  },

  /**
   * Fires the CREATE action
   * @param {Event} event - click event obj.
   * @private
   */
  _handleChange(event) {
    let val = event.target.value,
      btn = this.refs.randomBtn.getDOMNode();

    if (val !== '') {
      btn.setAttribute('disabled', 'true');
    }
    else {
      btn.removeAttribute('disabled');
    }

    ActionCreators.fire(AppConstants.CREATE, val);
  },

  render() {
    return (
      <div className="widgets">
        <div>
          <input type="text" maxLength="15" onChange={this._handleChange} />
        </div>
        <div>
          <button ref="randomBtn" onClick={this._handleClick}>
            Aye! Gimme a name!
          </button>
        </div>
      </div>
    );
  }

});
