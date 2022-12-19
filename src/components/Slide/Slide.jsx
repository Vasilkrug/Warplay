import React from 'react';
import './Slide.css'
import MyButton from "../../UI/MyButton/MyButton";

const Slide = ({image}) => {

    return (
        <>
            <div className='my_slide flex' style={{backgroundImage: `url(${image})`}}>
                <div className="slide_desc">
                    <span>Сервис облачного гейминга</span>
                    <h1>Преврати свое устройство в игровое </h1>
                </div>
                <div className="slide_btn_block">
                    <MyButton text='Upgrade'/>
                </div>
            </div>
        </>
    );
};

export default Slide;