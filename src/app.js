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

let count = 0;
const add_one = () => {
    console.log('Adding One');
};

const minus_one = () => {
    console.log('Minus One');
};

const reset = () => {
    console.log('Reset button');
};

const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={add_one}><i className="fa fa-plus" aria-hidden="true"></i> 1</button>
        <button onClick={minus_one}><i className="fa fa-minus" aria-hidden="true"></i> 1</button>
        <button onClick={reset}><i className="fa fa-refresh" aria-hidden="true"></i> Reset</button>
    </div>
);

console.log(templateTwo);
const app_roor = document.getElementById('react_container');
ReactDOM.render(templateTwo, app_roor);