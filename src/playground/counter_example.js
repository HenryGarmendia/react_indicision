let count = 0;
const add_one = () => {
    count++;
    render_counter_app();
};

const minus_one = () => {
    count--;
    render_counter_app();
};

const reset = () => {
    count = 0;
    render_counter_app();
};

const app_roor = document.getElementById('react_container');

const render_counter_app = () => {
    const templateTwo = (
        <div>
        <h1>Count: {count}</h1>
        <button onClick={add_one}><i className="fa fa-plus" aria-hidden="true"></i> 1</button>
        <button onClick={minus_one}><i className="fa fa-minus" aria-hidden="true"></i> 1</button>
        <button onClick={reset}><i className="fa fa-refresh" aria-hidden="true"></i> Reset</button>
        </div>
    );
    
    ReactDOM.render(templateTwo, app_roor);
};

render_counter_app();