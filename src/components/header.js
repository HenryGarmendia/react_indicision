import React from 'react';

const Header = (props) => (
    <div className="header">
        <h1>{props.app_title}</h1>
        {props.sub_title && <p>{props.sub_title}</p>}
    </div>
);

Header.defaultProps = {
    app_title: 'Indecision Web-App'
};

export default Header