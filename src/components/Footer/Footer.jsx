import React from 'react';
import './Footer.css';
import Logo from "../Logo/Logo";

const Footer = () => {
    return (
        <footer className="footer">
            <section className="footer_section">
                <div className="footer_desc">
                    <Logo/>
                    <span>2022. All rights reserved.</span>
                </div>
                <nav className="footer_nav">
                    <a href="">Политика конфиденциальности</a>
                    <a href="">Файлы Cookie</a>
                    <div className="footer_icons_links">
                        <a href="">
                            <img src={require('../../assets/img/icons/vk.png')} alt="vk"/>
                        </a>
                        <a href="">
                            <img src={require('../../assets/img/icons/discord.png')} alt="discord"/>
                        </a>
                        <a href="">
                            <img src={require('../../assets/img/icons/youtube.png')} alt="youtube"/>
                        </a>
                    </div>
                </nav>
            </section>
        </footer>
    );
};

export default Footer;