/** @jsx React.DOM */
/* jshint -W097 */
'use strict';

var React = require('react'),

    Mycomponent = React.createClass({
      render: function() {
        return (
            <h1 className="Mycomponent">Welcome to fluxury</h1>
            )
      }
    });

module.exports = Mycomponent;
