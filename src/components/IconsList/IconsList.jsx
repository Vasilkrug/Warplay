import React from 'react';
import IconItem from "../IconItem/IconItem";
import {icons} from "../../assets/img/icons/assets";
import './IconsList.css';

const IconsList = () => {
    return (
        <ul className="icons_list flex">
            {icons.map(item => {
                return <IconItem key={item.title} text={item.title} imgPath={item.img}/>
            })}
        </ul>
    );
};

export default IconsList;