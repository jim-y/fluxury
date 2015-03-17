'use strict';

/**
 * Holds the state of the pirate badge application
 * @module PirateStore
 */

import EventEmitter from 'events';
import Immutable from 'immutable';
import AppDispatcher from '../AppDispatcher';
import AppConstants from '../AppConstants';
import { getImmutPirateNames, getImmutPirateAppellations } from './PirateResources';

/**
 * @const
 * @type {List.<string>}
 * @private
 */
const _pirateNames = getImmutPirateNames();

/**
 * @const
 * @type {List.<string>}
 * @private
 */
const _pirateAppellations = getImmutPirateAppellations();

/**
 * @type {Map}
 * @private
 */
let _pirate;

/**
 * Querying a random member of a structure.
 * @param {List.<string>} immutablePool - Immutable.List instance
 * @returns {*}
 * @private
 */
function _getRandom(immutablePool) {
  let rnd = Math.floor(Math.random() * (immutablePool.size - 1));
  return immutablePool.get(rnd);
}

/**
 * Creating an immutable Pirate Map object with the given name and a random
 * appellation.
 * @param {string} name
 * @returns {Map}  an immutable pirate object
 * @private
 */
function _create(name) {
  let appellation = _getRandom(_pirateAppellations);
  return Immutable.Map({ name, appellation });
}

/**
 * Creating an immutable Pirate Map object with random name and random
 * appellation
 * @returns {Map}  an immutable pirate object
 * @private
 */
function _random() {
  let name = _getRandom(_pirateNames),
    appellation = _getRandom(_pirateAppellations);
  return Immutable.Map({ name, appellation });
}

/**
 * Creating the store with ES6 class syntax. JSDoc doesn't support ES6 classes
 * yet. See: {@link https://github.com/jsdoc3/jsdoc/issues/819}
 * @class PirateStore
 */
class PirateStore extends EventEmitter {

  /**
   * Initialize the store by registering it to the Dispatcher
   * @constructs PirateStore
   */
  constructor() {
    /** @member PirateStore#_dispatchToken */
    this._dispatchToken = AppDispatcher.register(this._registerCallback.bind(this));
  }

  /**
   * Registers a callback which will be called upon dispatch made
   * by the dispatcher
   * @param {Object} action
   * @member PirateStore#_registerCallback
   * @private
   */
  _registerCallback(action) {
    switch (action.type) {

      case AppConstants.CREATE:
        _pirate = _create(action.payload);
        this.emit(AppConstants.CHANGE_EVENT);
        break;

      case AppConstants.RANDOM:
        _pirate = _random();
        this.emit(AppConstants.CHANGE_EVENT);
        break;

      default:
        // do nothing
    }
  }

  /**
   * Gets the actual state (~pirate)
   * @member PirateStore#getPirate
   * @return {Map} _pirate
   */
  getPirate() {
    return _pirate;
  }

}

export default new PirateStore();
