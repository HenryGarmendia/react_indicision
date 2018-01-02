"use strict";

// JSX - JavaScript XML
// var template = <p>This is a JSX from app.js...</p>;


var template = React.createElement(
  "p",
  null,
  "This is a JSX from app.js..."
);
var app_roor = document.getElementById('app');

ReactDOM.render(template, app_roor);