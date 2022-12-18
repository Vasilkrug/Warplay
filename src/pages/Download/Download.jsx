import React from 'react';
import './Download.css';

const Download = () => {
    return (
        <div className="download flex">
            <h2>Выберете операционную систему</h2>
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