import React from 'react';
import IconsLinksList from "../IconsLinksList/IconsLinksList";
import './HeaderNav.css';

const HeaderNav = () => {
    return (
        <nav className="header_nav flex">
            <a href="">Главная</a>
            <a href="">Магазин игр</a>
            <a href="">Скачать</a>
            <a href="">Открыть в браузере</a>
            <a href="">Цены</a>
            <a href="">Контакты</a>
            <a href="">Корзина</a>
            <a href="">Войти</a>
            <IconsLinksList/>
        </nav>
    );
};

export default HeaderNav;