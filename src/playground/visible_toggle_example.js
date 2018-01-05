console.log('app.js is running!');

let content = '';
let btn_text = 'Show details';

const toggle_change = () => {
    if (content === '') {
        content = <p>Hey, you can see the text now!</p>;
        btn_text = 'Hide details';
        render_visible();
    } else {
        content = '';
        btn_text = 'Show details';
        render_visible();
    }
};

const app_root = document.getElementById('react_container');

const render_visible = () => {
    const output_jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggle_change}>{btn_text}</button>
            {content}
        </div>
    );

    ReactDOM.render(output_jsx, app_root);
};

render_visible();