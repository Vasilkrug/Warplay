import React from 'react';
import './IconItem.css';

const IconItem = ({text, imgPath}) => {

    return (
        <li className='icon_item'>
            <img src={`${imgPath}`} alt={text}/>
            <span>{text}</span>
        </li>
    );
};

export default IconItem;