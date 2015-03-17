'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Footer extends React.Component {

  /**
   * Renders the page footer
   * @return {ReactElement}
   */
  render() {
    return (
      <div>
        <footer>
          <Link to="contact">Contact</Link>
        </footer>
      </div>
    );
  }

}
