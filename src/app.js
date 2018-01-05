"use strict";
console.log('app.js is running live!');

class Header extends React.Component {
    render () {
        return (
            <div>
                <h1>Indecision Web-App</h1>
                <p>Put your life decision in the logic of a computer.</p>
                <Action />
                <Options />
                <AddOptions />
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

ReactDOM.render(<Header />, document.getElementById('react_container'));