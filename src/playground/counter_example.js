class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.add_one = this.add_one.bind(this);
        this.minus_one = this.minus_one.bind(this);
        this.reset = this.reset.bind(this);

        this.state = {
            count: 0
        };
    }
    componentDidMount() {
        const count = parseInt(localStorage.getItem('count'));
        if (!isNaN(count)) {
            this.setState(() => ({ count }));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            const count = this.state.count;
            localStorage.setItem('count', count);
        }
    }

    add_one() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    minus_one() {
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            };
        });
    }

    reset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.add_one}><i className="fa fa-plus" aria-hidden="true"></i> 1</button>
                <button onClick={this.minus_one}><i className="fa fa-minus" aria-hidden="true"></i> 1</button>
                <button onClick={this.reset}><i className="fa fa-refresh" aria-hidden="true"></i> Reset</button>
            </div>
        );
    }
};

ReactDOM.render(<Counter />, document.getElementById('react_container'));

// let count = 0;
// const add_one = () => {
//     count++;
//     render_counter_app();
// };

// const minus_one = () => {
//     count--;
//     render_counter_app();
// };

// const reset = () => {
//     count = 0;
//     render_counter_app();
// };

// const app_roor = document.getElementById('react_container');

// const render_counter_app = () => {
//     const templateTwo = (
//         <div>
//         <h1>Count: {count}</h1>
//         <button onClick={add_one}><i className="fa fa-plus" aria-hidden="true"></i> 1</button>
//         <button onClick={minus_one}><i className="fa fa-minus" aria-hidden="true"></i> 1</button>
//         <button onClick={reset}><i className="fa fa-refresh" aria-hidden="true"></i> Reset</button>
//         </div>
//     );
    
//     ReactDOM.render(templateTwo, app_roor);
// };

// render_counter_app();