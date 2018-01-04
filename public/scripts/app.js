"use strict";

// JSX - JavaScript XML

var app = {
    title: 'Indecision Web-App',
    subtitle: 'Put your life decision in the logic of a computer.',
    options: ['One', 'Two', 'Three']
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

var count = 0;
var add_one = function add_one() {
    count++;
    render_counter_app();
};

var minus_one = function minus_one() {
    count--;
    render_counter_app();
};

var reset = function reset() {
    count = 0;
    render_counter_app();
};

var app_roor = document.getElementById('react_container');

var render_counter_app = function render_counter_app() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: add_one },
            React.createElement('i', { className: 'fa fa-plus', 'aria-hidden': 'true' }),
            ' 1'
        ),
        React.createElement(
            'button',
            { onClick: minus_one },
            React.createElement('i', { className: 'fa fa-minus', 'aria-hidden': 'true' }),
            ' 1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            React.createElement('i', { className: 'fa fa-refresh', 'aria-hidden': 'true' }),
            ' Reset'
        )
    );

    ReactDOM.render(templateTwo, app_roor);
};

render_counter_app();
