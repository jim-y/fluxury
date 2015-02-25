'use strict';

import AppDispatcher from './AppDispatcher';

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

/**
 * The same as exporting
 * module.exports = {
 *   fire: fire
 * }
 */
export default { fire };
