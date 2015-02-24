'use strict';

var Immutable = require('immutable'),
  { names, appellations } = require('../../assets/piratenames.json'),
  _names = Immutable.List(names),
  _appellations = Immutable.List(appellations);

/**
 * Return pirate names
 * @returns {List<string>|List<any>} _names
 */
let getImmutPirateNames = () => _names;

/**
 * Return pirate appellations
 * @returns {List<string>|List<any>} _appellations
 */
let getImmutPirateAppellations = () => _appellations;

module.exports = {
  getImmutPirateNames,
  getImmutPirateAppellations
};
