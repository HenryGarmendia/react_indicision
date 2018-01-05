"use strict";
console.log('app.js is running live!');

class IndecisionWebApp extends React.Component {
    render () {
        const app_name = 'Indecision Web-App';
        const app_sub_title = 'Put your life decision in the logic of a computer.';

        return (
            <div>
                <Header title={app_name} sub_title={app_sub_title}/>
                <Action />
                <Options />
                <AddOptions />
            </div>
        );
    }
}

class Header extends React.Component {
    render () {
        console.log(this.props);
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
                <button>What should I do?</button>
			</div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <p>Options Component Here...</p>
                <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render () {
        return (
            <div>
                <p>Option Nested Component Here...</p>
            </div>
        );
    }
}

class AddOptions extends React.Component {
    render () {
        return (
            <div>
                <p>AddOptions Component Here...</p>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionWebApp />, document.getElementById('react_container'));