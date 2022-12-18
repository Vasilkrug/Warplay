import React from 'react';
import './RouterButton.css';
import {Link} from "react-router-dom";

const RouterButton = ({path}) => {
    return (
        <Link to={path}>
            <img src={require('../../assets/img/icons/arrow.png')} alt=""/>
        </Link>
    );
};

export default RouterButton;