'use strict';

var React = require('react'),
  ActionCreators = require('../ActionCreators'),
  AppConstants = require('../AppConstants'),
  Widget;

Widget = React.createClass({

  /**
   * Fires the RANDOM action ob button click
   * @private
   */
  _handleClick: function() {
    ActionCreators.fire(AppConstants.RANDOM, {});
  },

  /**
   * Fires the CREATE action
   * @param {Event} event - click event obj.
   * @private
   */
  _handleChange: function(event) {
    var val = event.target.value,
        btn = document.querySelector('#randomBtn'); // could use ref instead

    if (val !== '') {
      btn.setAttribute('disabled', 'true');
    }
    else {
      btn.removeAttribute('disabled');
    }

    ActionCreators.fire(AppConstants.CREATE, val);
  },

  render: function() {
    return (
      <div className="widgets">
        <div>
          <input type="text" maxLength="15" onChange={this._handleChange} />
        </div>
        <div>
          <button id="randomBtn" onClick={this._handleClick}>Aye! Gimme a name!</button>
        </div>
      </div>
    );
  }

});

module.exports = Widget;
