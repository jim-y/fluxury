'use strict';

import Immutable from 'immutable';
import { names, appellations } from '../../assets/piratenames.json';

const _names = Immutable.List(names);
const _appellations = Immutable.List(appellations);

/**
 * Return pirate names
 * @returns {List<string>|List<any>} _names
 */
export function getImmutPirateNames() {
  return _names;
}

/**
 * Return pirate appellations
 * @returns {List<string>|List<any>} _appellations
 */
export function getImmutPirateAppellations() {
  return _appellations;
}
