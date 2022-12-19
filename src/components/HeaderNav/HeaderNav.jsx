import React from 'react';
import IconsLinksList from "../IconsLinksList/IconsLinksList";
import './HeaderNav.css';
import {Link} from "react-router-dom";
import {footerIcons} from "../../assets/img/icons/assets";

const HeaderNav = () => {
    return (
        <nav className="header_nav flex">
            <Link to="/download">Скачать</Link>
            <Link to="subscriptions">Цены</Link>
            <Link to="/contacts">Контакты</Link>
            <Link to="/authorization">Войти</Link>
            <IconsLinksList icons={footerIcons} classNames="icons_links flex gap30"/>
        </nav>
    );
};

export default HeaderNav;