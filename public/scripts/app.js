"use strict";

// JSX - JavaScript XML

var app = {
    title: 'Indecision Web-App',
    subtitle: 'Put your life decision in the logic of a computer.',
    options: ['One', 'Two', 'Three', 'Four']
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options && app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'List item 1'
        ),
        React.createElement(
            'li',
            null,
            'List item 2'
        ),
        React.createElement(
            'li',
            null,
            'List item 3'
        )
    )
);

var user = {
    name: 'Henry',
    age: 37,
    location: 'Forney'
};

var get_location = function get_location(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    get_location(user.location)
);

var app_roor = document.getElementById('react_container');
ReactDOM.render(template, app_roor);
