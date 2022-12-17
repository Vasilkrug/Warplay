import React from 'react';
import IconItem from "../IconItem/IconItem";
import './IconsList.css';
import {icons} from "../../assets/img/icons/assets";

const IconsList = () => {
    return (
        <ul className="icons_list">
            {icons.map(item => {
                return <IconItem key={item.title} text={item.title} imgPath={item.img}/>
            })}
        </ul>
    );
};

export default IconsList;