"use strict";

// JSX - JavaScript XML
const app = {
    title: 'Indecision Web-App',
    subtitle: 'Put your life decision in the logic of a computer.',
    options: []
};

const on_form_submit = (e) => {
    e.preventDefault();
    const option = e.currentTarget.options.value;

    if (option) {
        app.options.push(option);
        e.target.elements.options.value = '';
        render_options();
    }
}; // on_form_submit END

const on_remove_all = () => {
    app.options = [];
    render_options();
}; // on_remove_all END

const app_root = document.getElementById('react_container');

const render_options = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options && app.options.length > 0) ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            {(app.options.length > 0) ? <button onClick={on_remove_all}>Remove All</button> : null }
            <ol>
                {app.options.map((option, index) => {
                    return <li key={index}>{option}</li>
                })}
            </ol>
            <form onSubmit={on_form_submit}>
                <input type="text" name="options" placeholder="e.g. Better at JavaScript" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, app_root);
}; // render_options end

render_options();
