'use strict';

var React = require('react'),
  Link = require('react-router').Link,
  Contact;

Contact = React.createClass({
  render: function() {
    return (
      <div>
        <div>
          This screen only exists to represent the routing possibilities.
          To go back use the browser's history, or push the 'Home' button.
          <Link to="home">Home</Link>
        </div>
        <div>
          You can find me on
          <a href="https://twitter.com/attilakling">twitter</a>,
          <a href="https://github.com/jim-y"> github</a>
          or at
          <a href="http://prohardver.hu/tag/jim-y.html">prohardver</a>.
          And I'm running a blog also at <a href="http://jim-y.me/">link</a>.
        </div>
      </div>
    );
  }
});

module.exports = Contact;
