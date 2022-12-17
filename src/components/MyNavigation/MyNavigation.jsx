import React from 'react';
import './MyNavigation.css';

const MyNavigation = ({children,myClass}) => {
    return (
        <div className={`flex_nav ${myClass}`}>
            {children}
        </div>
    );
};

export default MyNavigation;