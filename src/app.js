import React from 'react'
import ReactDOM from 'react-dom'
import AddOptions from './components/add_options'
import Option from './components/option'
import Options from './components/options'

"use strict";
console.log('app.js is running live!');

class IndecisionWebApp extends React.Component {
    constructor(props) {
        super(props);

        this.method_delete_options = this.method_delete_options.bind(this);
        this.method_pick = this.method_pick.bind(this);
        this.method_add_options = this.method_add_options.bind(this);
        this.method_delete_option = this.method_delete_option.bind(this);

        this.state = {
            options: []
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch(e) {
            // do nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    method_delete_options() {
        this.setState(() => ({ options: [] }));
    }

    method_delete_option(option_to_remove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option_to_remove !== option)
        }));
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
                <Options 
                    options={this.state.options} 
                    method_delete_options={this.method_delete_options} 
                    method_delete_option={this.method_delete_option}
                />
                <AddOptions method_add_options={this.method_add_options} />
            </div>
        );
    }
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

ReactDOM.render(<IndecisionWebApp />, document.getElementById('react_container'));