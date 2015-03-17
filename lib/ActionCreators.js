'use strict';

/**
 * Actions are initialized here for the Pirate Badge application
 * @module ActionCreators
 */

import AppDispatcher from './AppDispatcher';

/**
 * Firing out a new action to the dispatcher with the given type (@AppConstants)
 * and the given payload
 * @param {string} actionType=''
 * @param {*} [payload={}]
 */
export default function fireAction(actionType='', payload={}) {
  AppDispatcher.dispatch({
    type: actionType,
    payload: payload
  });
}
