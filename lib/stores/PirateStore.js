'use strict';

import EventEmitter from 'events';
import Immutable from 'immutable';
import AppDispatcher from '../AppDispatcher';
import AppConstants from '../AppConstants';
import { getImmutPirateNames, getImmutPirateAppellations } from './PirateResources';

const _pirateNames = getImmutPirateNames();
const _pirateAppellations = getImmutPirateAppellations();

let _pirate = Immutable.Map({ name: '', appellation: '' });

/**
 * Querying a random member of a structure.
 * @param {List<T>|List<any>} immutablePool - Immutable.List instance
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
 * @returns {Immutable.Map}  an immutable pirate object
 * @private
 */
function _create(name) {
  let appellation = _getRandom(_pirateAppellations);
  return Immutable.Map({ name, appellation });
}

/**
 * Creating an immutable Pirate Map object with random name and random
 * appellation
 * @returns {Immutable.Map}  an immutable pirate object
 * @private
 */
function _random() {
  let name = _getRandom(_pirateNames),
    appellation = _getRandom(_pirateAppellations);
  return Immutable.Map({ name, appellation });
}

/**
 * Creating the store with ES6 class syntax.
 */
class PirateStore extends EventEmitter {

  constructor() {
    super();
    this._dispatchToken = AppDispatcher.register(action => {
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
          return console.error('noop');

      }
    });
  }

  getPirate() {
    return _pirate;
  }

}

export default new PirateStore();
