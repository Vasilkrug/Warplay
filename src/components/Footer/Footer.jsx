import React from 'react';
import Logo from "../Logo/Logo";
import IconsLinksList from "../IconsLinksList/IconsLinksList";
import './Footer.css';
import {footerIcons} from "../../assets/img/icons/assets";

const Footer = () => {
    return (
        <footer className="footer">
            <section className="footer_section flex">
                <div className="footer_desc flex gap30">
                    <Logo/>
                    <span>2022. All rights reserved.</span>
                </div>
                <div className="footer_nav flex gap30">
                    <a href="">Политика конфиденциальности</a>
                    <a href="">Файлы Cookie</a>
                    <IconsLinksList icons={footerIcons} classNames="icons_links flex gap30"/>
                </div>
            </section>
        </footer>
    );
};

export default Footer;