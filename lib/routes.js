'use strict';

import React from 'react';
import { Route, DefaultRoute } from 'react-router';
import { Home, Contact, PirateBadge } from './components/Components';
import config from './appConfig.js';

export default (
  <Route name="home" path={config.baseUrl} handler={Home}>
    <Route name="pirate" path="pirate" handler={PirateBadge} />
    <Route name="contact" path="contact" handler={Contact} />
    <DefaultRoute handler={PirateBadge} />
  </Route>
);
