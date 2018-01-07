import React from 'react';

const Action = (props) => {
    return (
        <div>
            <button onClick={props.method_pick} disabled={!props.has_options}>What should I do?</button>
        </div>
    );
}

export default Action