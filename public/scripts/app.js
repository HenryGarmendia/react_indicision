"use strict";

// JSX - JavaScript XML

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Indecision Web-App"
    ),
    React.createElement(
        "p",
        null,
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    )
);
var app_roor = document.getElementById('react_container');

ReactDOM.render(template, app_roor);
