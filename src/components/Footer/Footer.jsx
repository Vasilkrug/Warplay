import React from 'react';
import './Footer.css';
import Logo from "../Logo/Logo";
import MyNavigation from "../MyNavigation/MyNavigation";
import IconsLinksList from "../IconsLinksList/IconsLinksList";

const Footer = () => {
    return (
        <footer className="footer">
            <section className="footer_section">
                <MyNavigation myClass="footer_desc column">
                    <Logo/>
                    <span>2022. All rights reserved.</span>
                </MyNavigation>
                <MyNavigation myClass="footer_nav column">
                    <a href="">Политика конфиденциальности</a>
                    <a href="">Файлы Cookie</a>
                    <IconsLinksList/>
                </MyNavigation>
            </section>
        </footer>
    );
};

export default Footer;