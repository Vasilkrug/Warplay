import React from 'react';
import './HeaderNav.css';

const HeaderNav = () => {
    return (
        <nav className="header_nav">
            <ul className="header_nav_list">
                <li><a href="">Главная</a></li>
                <li><a href="">Помощь</a></li>
                <li><a href="">Скачать</a></li>
                <li><a href="">Открыть в браузере</a></li>
                <li><a href="">Цены</a></li>
                <li><a href="">Тех поддержка</a></li>
                <li><a href="">Контакты</a></li>
            </ul>
        </nav>
    );
};

export default HeaderNav;