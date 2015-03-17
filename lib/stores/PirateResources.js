'use strict';

/**
 * Resources for the pirate tutorial
 * @module PirateResources
 */

import Immutable from 'immutable';
import { names, appellations } from '../../assets/piratenames.json';

/**
 * @const
 * @type {List.<string>}
 * @private
 */
const _names = Immutable.List(names);

/**
 * @const
 * @type {List.<string>}
 * @private
 */
const _appellations = Immutable.List(appellations);

/**
 * Return pirate names
 * @function
 * @return {List.<string>} _names
 */
let getImmutPirateNames = () => _names;

/**
 * Return pirate appellations
 * @function
 * @return {List.<string>} _appellations
 */
let getImmutPirateAppellations = () => _appellations;

export default {
  getImmutPirateNames,
  getImmutPirateAppellations
};
