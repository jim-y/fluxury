'use strict';

var React = require('react'),
  { Link } = require('react-router'),
  Contact;

Contact = React.createClass({

  render() {
    const github = 'https://github.com/jim-y';
    return (
      <div>
        <div>
          This screen only exists to represent the routing possibilities.
          To go back use the browser's history, or push the Home button.&nbsp;
          <Link to="home">Home</Link>
        </div>
        <div>
          You can find me on <a href={github}>github</a>.
        </div>
      </div>
    );
  }

});

module.exports = Contact;
