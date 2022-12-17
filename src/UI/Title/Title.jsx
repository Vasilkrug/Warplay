import React from 'react';
import './Title.css';

const Title = ({text}) => {
    return (
        <div className="my_title">
            <span>{text}</span>
        </div>
    );
};

export default Title;