"use strict";

// JSX - JavaScript XML

var app = {
    title: 'Indecision Web-App',
    subtitle: 'Put your life decision in the logic of a computer.',
    options: []
};

var on_form_submit = function on_form_submit(e) {
    e.preventDefault();
    var option = e.currentTarget.options.value;

    if (option) {
        app.options.push(option);
        e.target.elements.options.value = '';
        render_options();
    }
};

var on_remove_all = function on_remove_all() {
    app.options = [];
    render_options();
};

var app_root = document.getElementById('react_container');

var render_options = function render_options() {
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
            'p',
            null,
            app.options.length
        ),
        app.options.length > 0 ? React.createElement(
            'button',
            { onClick: on_remove_all },
            'Remove All'
        ) : null,
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
        ),
        React.createElement(
            'form',
            { onSubmit: on_form_submit },
            React.createElement('input', { type: 'text', name: 'options', placeholder: 'e.g. Better at JavaScript' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, app_root);
};

render_options();
