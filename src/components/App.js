var React = require('react');

var App = React.createClass({
  displayName: 'App',

  render: function() {
    return (
      React.createElement('div', null,
        React.createElement('h1', null,
          'Hello, World!'
        )
      )
    );
  }
});

module.exports = App;
