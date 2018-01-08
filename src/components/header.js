import React from 'react';

const Header = (props) => (
    <div className="header">
        <div>
            <h1 className="header__title">{props.app_title}</h1>
            {props.sub_title && <p className="header__subtitle">{props.sub_title}</p>}
        </div>
    </div>
);

Header.defaultProps = {
    app_title: 'Indecision Web-App'
};

export default Header