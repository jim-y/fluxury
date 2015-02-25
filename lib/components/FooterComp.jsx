'use strict';

import React from 'react';
import { Link } from 'react-router';

export default React.createClass({

  render() {
    return (
      <div>
        <footer>
          <Link to="contact">Contact</Link>
        </footer>
      </div>
    );
  }

});
