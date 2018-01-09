import React from 'react';
import Option from './option'

const Options = (props) => (
    <div>
        <div className="widget_header">
            <h3 className="widget_header__h3">Your Options</h3>
            <button 
            className="button button--link" 
            onClick={props.method_delete_options}
            >
            Remove All <i class="fa fa-trash-o" aria-hidden="true"></i>
            </button>
        </div>
        {props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
        {
            props.options.map((option, index) => (
                <Option 
                    key={option} 
                    option_text={option}
                    count={index + 1}
                    method_delete_option={props.method_delete_option}
                />))
        }
    </div>
);

export default Options