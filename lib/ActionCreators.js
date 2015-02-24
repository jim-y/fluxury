'use strict';

var AppDispatcher = require('./AppDispatcher');

/**
 * Firing out a new action to the dispatcher with the given type (@AppConstants)
 * and the given payload
 * @param {string} actionType
 * @param {*} payload
 */
function fire(actionType, payload) {
  AppDispatcher.dispatch({
    type: actionType,
    payload: payload
  });
}

module.exports = {
  fire
};
