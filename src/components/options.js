import React from 'react';

const Options = (props) => {
    return (
        <div>
        <button onClick={props.method_delete_options}>Remove All</button>
        {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.map((option) => <Option key={option} option_text={option} method_delete_option={props.method_delete_option}/>)
            }
        </div>
    );
}

export default Options