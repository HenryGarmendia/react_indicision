import React from 'react';

const Action = (props) => (
    <div>
        <button 
            onClick={props.method_pick} 
            disabled={!props.has_options}>Randomize your options
        </button>
    </div>
);

export default Action