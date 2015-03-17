'use strict';

import React from 'react';
import { Link } from 'react-router';
import config from '../appConfig.js';

export default class Contact extends React.Component {

  /**
   * Renders the contact screen.
   * @return {ReactElement}
   */
  render() {
    return (
      <div>
        <div>
          This screen only exists to represent the routing possibilities.
          To go back use the browser's history, or push the Home button.&nbsp;
          <Link to="home">Home</Link>
        </div>
        <div>
          You can find me on <a href={config.github}>github</a>.
        </div>
      </div>
    );
  }

}
