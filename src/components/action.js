import React from 'react';

const Action = (props) => (
    <div>
        <button
            className="big_button"
            onClick={props.method_pick} 
            disabled={!props.has_options}>Randomize Your Options
        </button>
    </div>
);

export default Action