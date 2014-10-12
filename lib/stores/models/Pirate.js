'use strict';

var Backbone = require('backbone'),
    Pirate = Backbone.Model.extend({
      defaults: {
        name: '',
        appellation: ''
      }
    });

module.exports = Pirate;
