'use strict';

var React = require('react'),
    Actions = require('../actions/Actions'),
    Widget;

Widget = React.createClass({

  _handleClick: function() {
    Actions.random();
  },

  _handleChange: function(event) {
    var val = event.target.value,
        btn = document.querySelector('#randomBtn');

    if (val !== '') {
      btn.setAttribute('disabled', 'true');
    }
    else {
      btn.removeAttribute('disabled');
    }

    Actions.create(val);
  },

  render: function() {
    return (
      <div className={this.props.cname}>
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
