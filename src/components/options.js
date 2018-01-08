import React from 'react';
import Option from './option'

const Options = (props) => (
    <div>
        <button 
            className="button button--link" 
            onClick={props.method_delete_options}
        >
            Remove All
        </button>
        {props.options.length === 0 && <p>Please add an option to get started!</p>}
        {
            props.options.map((option) => (
                <Option 
                    key={option} option_text={option} 
                    method_delete_option={props.method_delete_option}
                />))
        }
    </div>
);

export default Options