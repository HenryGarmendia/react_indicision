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
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "List item 1"
        ),
        React.createElement(
            "li",
            null,
            "List item 2"
        ),
        React.createElement(
            "li",
            null,
            "List item 3"
        )
    )
);

var app_roor = document.getElementById('react_container');

ReactDOM.render(template, app_roor);
