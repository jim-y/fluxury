'use strict';

import React from 'react';
import { RouteHandler } from 'react-router';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default class Home extends React.Component {

  /**
   * Renders the home screen. This is the default entry point.
   * @return {ReactElement}
   */
  render() {
    return (
      <div>
        <Header/>
        <main>
          <RouteHandler/>
        </main>
        <Footer/>
      </div>
    );
  }

}
