'use strict';

var React = require('react'),
  Badge;

Badge = React.createClass({

  render() {
    let pirate = this.props.pirate,
      name = pirate.get('name'),
      appellation = pirate.get('appellation'),
      pirateName = (!name || !appellation) ? '' : `${name} the ${appellation}`;

    return (
      <div className="badge">
        <div className="greeting">
          Arrr! Me name is
        </div>
        <div className="name">
          <span id="badgeName">{pirateName}</span>
        </div>
      </div>
    );
  }

});

module.exports = Badge;
