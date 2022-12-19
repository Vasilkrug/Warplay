import React from 'react';
import './MyButton.css';

const MyButton = ({text}) => {
    return (
        <>
            <button className="button">{text}</button>
        </>
    );
};

export default MyButton;