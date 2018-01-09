import React from 'react';

const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.count}. {props.option_text}</p>
        <button 
            className="button button--link"
            onClick={(e) => {
                props.method_delete_option(props.option_text);
            }}
        >
        Remove <i class="fa fa-times" aria-hidden="true"></i> 
        </button>
    </div>
);

export default Option