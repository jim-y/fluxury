'use strict';

import React from 'react';
import Router from 'react-router';
import routes from './routes';

/**
 * For the React Chrome addon
 */
window.React = React;

/**
 * React render error callback
 * @param {Error} err
 * @returns {undefined}
 */
function onRenderError(err) {
  if (err) {
    return console.error(err);
  }
}

/**
 * Rendering the app to the site's body. Using react-router here.
 */
Router.run(routes, Handler => {
  React.render(
    <Handler/>,
    document.body,
    onRenderError
  );
});
