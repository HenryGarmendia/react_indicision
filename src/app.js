"use strict";
console.log('app.js is running live!');

class IndecisionWebApp extends React.Component {
    constructor(props) {
        super(props);

        this.method_delete_options = this.method_delete_options.bind(this);
        this.method_pick = this.method_pick.bind(this);

        this.state = {
            options: ['First Item', 'Second Item', 'Third Item', 'Fourth Item']
        }
    }

    method_delete_options() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    method_pick() {
        this.setState((prevState) => {
            const random_num = Math.floor(Math.random() * prevState.options.length);
            const options = prevState.options[random_num]
            alert(options);
        });
    }

    render () {
        const app_title = 'Indecision Web-App';
        const app_sub_title = 'Put your life decision in the logic of a computer.';

        return (
            <div>
                <Header title={app_title} sub_title={app_sub_title} />
                <Action has_options={this.state.options.length > 0} method_pick={this.method_pick} />
                <Options options={this.state.options} method_delete_options={this.method_delete_options} />
                <AddOptions />
            </div>
        );
    }
}

class Header extends React.Component {
    render () {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.sub_title}</p>
            </div>
        );
    }
}

class Action extends React.Component {
    render () {
        return (
            <div>
                <button onClick={this.props.method_pick} disabled={!this.props.has_options}>What should I do?</button>
			</div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
            <button onClick={this.props.method_delete_options}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} option_text={option}/>)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render () {
        return (
            <div>
                <p>Options: {this.props.option_text}</p>
            </div>
        );
    }
}

class AddOptions extends React.Component {
    method_add_options(e) {
        e.preventDefault();
        console.log(e);
        const option = e.currentTarget.add_option.value.trim();

        if (option) {
            alert(option);
        }
    }
    
    render () {
        return (
            <div>
                <form onSubmit={this.method_add_options}>
                    <input type="text" name="add_option" placeholder="e.g. Learn JavaScript" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionWebApp />, document.getElementById('react_container'));