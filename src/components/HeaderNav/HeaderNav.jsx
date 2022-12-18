import React from 'react';
import IconsLinksList from "../IconsLinksList/IconsLinksList";
import './HeaderNav.css';
import {Link} from "react-router-dom";

const HeaderNav = () => {
    return (
        <nav className="header_nav flex">
            <a href="">Главная</a>
            <a href="">Магазин игр</a>
            <Link to="/download">Скачать</Link>
            <a href="">Открыть в браузере</a>
            <Link to="subscriptions">Цены</Link>
            <Link to="/contacts">Контакты</Link>
            <a href="">Корзина</a>
            <a href="">Войти</a>
            <IconsLinksList/>
        </nav>
    );
};

export default HeaderNav;