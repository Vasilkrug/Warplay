import React from 'react';
import './MyLink.css';

const MyLink = ({text}) => {
    return (
        <div className="my_link">
            <a href="">{text}</a>
        </div>
    );
};

export default MyLink;