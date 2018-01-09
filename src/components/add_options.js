import React from 'react'

export default class AddOptions extends React.Component {
    state = {
        error: undefined
    };

    method_add_options = (e) => {
        e.preventDefault();
        const option = e.currentTarget.add_option.value.trim();
        const error = this.props.method_add_options(option);

        this.setState(() => ({ error }));
        if (!error) {
            e.target.elements.add_option.value = '';
        }
    };
    
    render () {
        return (
            <div>
                {this.state.error && <p className="add_option_error"><i className="fa fa-exclamation-triangle" aria-hidden="true"></i> {this.state.error}</p>}
                <form className="add_option" onSubmit={this.method_add_options}>
                    <input className="add_option__input" type="text" name="add_option" placeholder="e.g. Learn JavaScript" />
                    <button className="button"><i className="fa fa-plus" aria-hidden="true"></i> Add Option</button>
                </form>
            </div>
        );
    }
}