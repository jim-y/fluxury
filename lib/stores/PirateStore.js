'use strict';

var EventEmitter = require('events'),
  Immutable = require('immutable'),
  AppDispatcher = require('../AppDispatcher'),
  AppConstants = require('../AppConstants'),
  PirateResources = require('./PirateResources'),
  _pirate = Immutable.Map({
    name: '',
    appellation: ''
  }),
  _pirateNames = PirateResources.getImmutPirateNames(),
  _pirateAppellations = PirateResources.getImmutPirateAppellations();

/**
 * Querying a random member of a structure.
 * @param {List<T>|List<any>} immutablePool - Immutable.List instance
 * @returns {*}
 * @private
 */
function _getRandom(immutablePool) {
  var rnd = Math.floor(Math.random() * (immutablePool.size - 1));
  return immutablePool.get(rnd);
}

/**
 * Creating an immutable Pirate Map object with the given name and a random
 * appellation.
 * @param {string} name
 * @private
 */
function _create(name) {
  var rndAppellation = _getRandom(_pirateAppellations);

  _pirate = Immutable.Map({
    name: name,
    appellation: rndAppellation
  });
}

/**
 * Creating an immutable Pirate Map object with random name and appellation
 * @private
 */
function _random() {
  var rndName = _getRandom(_pirateNames),
    rndAppellation = _getRandom(_pirateAppellations);

  _pirate = Immutable.Map({
    name: rndName,
    appellation: rndAppellation
  });
}

/**
 * Creating the store with ES6 class syntax.
 */
class PirateStore extends EventEmitter {

  constructor() {
    super();

    this._dispatchToken = AppDispatcher.register((action) => {
      switch (action.type) {

        case AppConstants.CREATE:
          _create(action.payload);
          this.emit(AppConstants.CHANGE_EVENT);
          break;

        case AppConstants.RANDOM:
          _random();
          this.emit(AppConstants.CHANGE_EVENT);
          break;

        default:
          return console.error(new Error('noop'));

      }
    });
  }

  getPirate() {
    return _pirate;
  }

}

module.exports = new PirateStore();
