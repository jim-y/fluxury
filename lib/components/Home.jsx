'use strict';

import React from 'react';
import { RouteHandler } from 'react-router';
import Header from './HeaderComp.jsx';
import Footer from './FooterComp.jsx';

export default React.createClass({

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

});
