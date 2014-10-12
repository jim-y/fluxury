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

function init(promise) {
  _names = require('../piratenames.json');
  _pirate = new Pirate();
  promise.resolve();
}

function random() {
  _pirate = new Pirate({
    name: _getRandom(_names.names),
    appellation: _getRandom(_names.appellations)
  });
}

function create(name) {
  _pirate = new Pirate({
    name: name,
    appellation: _getRandom(_names.appellations)
  });
}

var Store = merge(EventEmitter.prototype, {
  getPirate: function() {
    return _pirate;
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

    case Constants.INIT:
      init(action.promise);
      Store.emitChange();
      break;

    case Constants.CREATE:
      create(action.name);
      Store.emitChange();
      break;

    case Constants.RANDOM:
      random();
      Store.emitChange();
      break;

    default:
      return true;
  }

  return true;
});

module.exports = Store;

