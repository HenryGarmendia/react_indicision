import React from 'react';

const Option = (props) => (
    <div>
        {props.option_text}
        <button 
            onClick={(e) => {
                props.method_delete_option(props.option_text);
            }}
        >
            Remove
        </button>
    </div>
);

export default Option