"use strict";

// JSX - JavaScript XML
var template = (
    <div>
    	<h1>Indecision Web-App</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <ol>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ol>
    </div>
);

var app_roor = document.getElementById('react_container');

ReactDOM.render(template, app_roor);