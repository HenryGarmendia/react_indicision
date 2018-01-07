import React from 'react';
import AddOptions from './add_options'
import Options from './options'
import Action from './action'
import Header from './header'

export default class IndecisionWebApp extends React.Component {
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