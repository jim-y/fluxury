'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher'),
    EventEmitter = require('events').EventEmitter,
    Constants = require('../constants/Constants'),
    merge = require('react/lib/merge'),
    Pirate = require('./models/Pirate'),
    CHANGE_EVENT = 'change',
    _names,
    _pirate;

function _getRandom(pool) {
  var rnd = Math.floor(Math.random() * (pool.length - 1));
  return pool[rnd];
}

function _init() {
  _names = require('../piratenames.json');
}

function _random() {
  _pirate = new Pirate({
    name: _getRandom(_names.names),
    appellation: _getRandom(_names.appellations)
  });
}

function _create(name) {
  _pirate = new Pirate({
    name: name,
    appellation: _getRandom(_names.appellations)
  });
}

var Store = merge(EventEmitter.prototype, {
  initialize: function() {
    console.log('Init');
    _init();
  },
  getPirate: function() {
    return _pirate || new Pirate();
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(payload) {

  var action = payload.action;

  switch(action.actionType) {

    case Constants.CREATE:
      _create(action.name);
      Store.emitChange();
      break;

    case Constants.RANDOM:
      _random();
      Store.emitChange();
      break;

    default:
      return true;
  }

  return true;
});

module.exports = Store;
