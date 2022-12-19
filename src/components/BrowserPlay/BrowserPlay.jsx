import React from 'react';
import './BrowserPlay.css';
import Title from "../../UI/Title/Title";
import MyLink from "../../UI/MyLink/MyLink";

const BrowserPlay = () => {
    return (
        <section className="browser_play">
            <div className="browser_play_desc">
                <Title text="Играть можно в браузере"/>
                <h2>Запускайте на любых устройствах</h2>
                <p>Наш модуль доступен на все популярные ОС
                    и работает на всех компьютерах.</p>
                <MyLink text="Открыть в браузере"/>
            </div>
            <div className="browser_play_img">

            </div>
        </section>
    );
};

export default BrowserPlay;