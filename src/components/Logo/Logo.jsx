import React from 'react';
import './Logo.css';

const Logo = () => {
    return (
        <div className="logo flex">
            <div className="logo_img">
                <img src={require('../../assets/img/icons/blue-logo.png')} alt=""/>
            </div>
            <div className="logo_text">
                <span>WARPLAY.CLOUD</span>
            </div>
        </div>
    );
};

export default Logo;