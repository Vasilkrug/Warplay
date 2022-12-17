import React from 'react';
import './Link.css';

const Link = ({text}) => {
    return (
        <div className="my_link">
            <a href="">{text}</a>
        </div>
    );
};

export default Link;