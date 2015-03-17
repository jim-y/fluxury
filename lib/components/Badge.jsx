/* global Badge */
'use strict';

import React from 'react';
import Immutable from 'immutable';

export default class Badge extends React.Component {

  /**
   * Renders the red and white badge component
   * @return {ReactElement}
   */
  render() {
    const pirate = this.props.pirate,
      name = pirate.get('name'),
      appellation = pirate.get('appellation'),
      pirateName = (!name || !appellation) ? '' : `${name} the ${appellation}`;

    return (
      <div className="badge">
        <div className="greeting">Arrr! Me name is</div>
        <div className="name">
          <span id="badgeName">{pirateName}</span>
        </div>
      </div>
    );
  }

}

Badge.propTypes = {
  pirate: React.PropTypes.instanceOf(Immutable.Map)
};

Badge.defaultProps = {
  pirate: Immutable.Map({ name: '', appellation: '' })
};
