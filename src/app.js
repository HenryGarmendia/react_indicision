"use strict";

// JSX - JavaScript XML
const app = {
    title: 'Indecision Web-App',
    subtitle: 'Put your life decision in the logic of a computer.',
    options: ['One', 'Two', 'Three']
};
const template = (
    <div>
    	<h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{(app.options && app.options.length > 0) ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ol>
    </div>
);

const app_roor = document.getElementById('react_container');
