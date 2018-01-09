import React from 'react';

const Action = (props) => (
    <div>
        <button
            className="big_button"
            onClick={props.method_pick} 
            disabled={!props.has_options}><i class="fa fa-random" aria-hidden="true"></i> Randomize Your Options
        </button>
    </div>
);

export default Action