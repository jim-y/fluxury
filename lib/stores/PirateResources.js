'use strict';

var Immutable = require('immutable'),
  _datas = require('../../assets/piratenames.json'),
  _names = Immutable.List(_datas.names),
  _appellations = Immutable.List(_datas.appellations);

/**
 * Return pirate names
 * @returns {List<T>|List<any>}
 */
function getImmutPirateNames() {
  return _names;
}

/**
 * Return pirate appellations
 * @returns {List<T>|List<any>}
 */
function getImmutPirateAppellations() {
  return _appellations;
}

module.exports = {
  getImmutPirateNames: getImmutPirateNames,
  getImmutPirateAppellations: getImmutPirateAppellations
};
