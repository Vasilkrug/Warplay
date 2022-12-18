import React from 'react';
import './Download.css';
import RouterButton from "../../UI/RouterButton/RouterButton";

const Download = () => {
    return (
        <div className="download flex">
            <div className="download_title flex gap30">
                <RouterButton path='/'/>
                <h2>Выберете операционную систему</h2>
            </div>
            <div className="operations_systems flex">
                <a href=""><img src={require('../../assets/img/downloadImg/windows.png')} alt="windows"/></a>
                <a href=""><img src={require('../../assets/img/downloadImg/mac.png')} alt="apple"/></a>
                <a href=""><img src={require('../../assets/img/downloadImg/linux.png')} alt="linux"/></a>
                <a href=""><img src={require('../../assets/img/downloadImg/chrome.png')} alt="chrome"/></a>
            </div>
        </div>
    );
};

export default Download;