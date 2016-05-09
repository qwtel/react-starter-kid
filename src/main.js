var React = require('react');
var {render} = require('react-dom');

var App = require('./components/App');

render(React.createElement(App), document.getElementById('app'));
