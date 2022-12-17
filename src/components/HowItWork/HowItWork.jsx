import React from 'react';
import './HowItWork.css';
import MyLink from "../../UI/MyLink/MyLink";
import Title from "../../UI/Title/Title";

const HowItWork = () => {
    return (
        <section className="how_it_work">
            <div className="how_it_work_img">
            </div>
            <div className="how_it_work_desc">
                <Title text="Облачный гейминг"/>
                <h2>Как это работает</h2>
                <p>Наши сервера запускают игру, и передают
                    вам картинку, которой вы можете управлять
                    в реальном времени!</p>
                <p>Приложение  запустится на ПК с процессором
                    от 1.5 GHz , от 1 Gb RAM и доступом в интернет
                    от 15 мбит/с
                    на всех операционых системах
                    Windows 7, 8, 10 MacOS и Linux .</p>
                <MyLink text='Загрузить'/>
            </div>
        </section>
    );
};

export default HowItWork;