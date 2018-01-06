"use strict";
console.log('app.js is running live!');

class IndecisionWebApp extends React.Component {
    constructor(props) {
        super(props);

        this.method_delete_options = this.method_delete_options.bind(this);
        this.method_pick = this.method_pick.bind(this);
        this.method_add_options = this.method_add_options.bind(this);

        this.state = {
            options: props.options
        }
    }

    method_delete_options() {
        this.setState(() => ({ options: [] }));
    }

    method_pick() {
        const random_num = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[random_num]
        alert(option);
    }

    method_add_options(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exist';
        }

        this.setState((prevState) => ({ 
            options: prevState.options.concat(option)
        }));
    }

    render () {
        const app_sub_title = 'Put your life decision in the logic of a computer.';

        return (
            <div>
                <Header sub_title={app_sub_title} />
                <Action has_options={this.state.options.length > 0} method_pick={this.method_pick} />
                <Options options={this.state.options} method_delete_options={this.method_delete_options} />
                <AddOptions method_add_options={this.method_add_options} />
            </div>
        );
    }
}

IndecisionWebApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.app_title}</h1>
            {props.sub_title && <p>{props.sub_title}</p>}
        </div>
    );
}

Header.defaultProps = {
    app_title: 'Indecision Web-App'
};

const Action = (props) => {
    return (
        <div>
            <button onClick={props.method_pick} disabled={!props.has_options}>What should I do?</button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
        <button onClick={props.method_delete_options}>Remove All</button>
            {
                props.options.map((option) => <Option key={option} option_text={option}/>)
            }
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            <p>{props.option_text}</p>
        </div>
    );
}

class AddOptions extends React.Component {
    constructor(props) {
        super(props);
        this.method_add_options = this.method_add_options.bind(this);

        this.state = {
            error: undefined
        };
    }

    method_add_options(e) {
        e.preventDefault();
        const option = e.currentTarget.add_option.value.trim();
        const error = this.props.method_add_options(option);

        this.setState(() => ({ error }));
    }
    
    render () {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.method_add_options}>
                    <input type="text" name="add_option" placeholder="e.g. Learn JavaScript" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionWebApp />, document.getElementById('react_container'));