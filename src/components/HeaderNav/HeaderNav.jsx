import React from 'react';
import './HeaderNav.css';

const HeaderNav = () => {
    return (
        <nav className="header_nav">
                <a href="">Главная</a>
                <a href="">Каталог игр</a>
                <a href="">Скачать</a>
                <a href="">Открыть в браузере</a>
                <li><a href="">Цены</a></li>
                <a href="">Контакты</a>
                <a href="">Войти</a>
        </nav>
    );
};

export default HeaderNav;