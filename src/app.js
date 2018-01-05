"use strict";
console.log('app.js is running live!');

class IndecisionWebApp extends React.Component {
    render () {
        const app_title = 'Indecision Web-App';
        const app_sub_title = 'Put your life decision in the logic of a computer.';
        const options = ['First Item', 'Second Item', 'Third Item', 'Fourth Item'];

        return (
            <div>
                <Header title={app_title} sub_title={app_sub_title}/>
                <Action />
                <Options options={options}/>
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
    method_pick() {
        console.log('method_pick');
    }

    render () {
        return (
            <div>
                <button onClick={this.method_pick}>What should I do?</button>
			</div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.method_remove_all = this.method_remove_all.bind(this);
    }// constructor END

    method_remove_all() {
        console.log(this.props.options);
    }// method_remove_all END

    render() {
        return (
            <div>
            <button onClick={this.method_remove_all}>Remove All</button>
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