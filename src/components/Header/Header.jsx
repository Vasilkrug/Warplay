import React from 'react';
import "./Header.css"
import Logo from "../Logo/Logo";
import HeaderNav from "../HeaderNav/HeaderNav";

const Header = () => {
    const burgerMenuToggle = () => {
    const burgerBtn = document.querySelector('.burger-btn');
    const nav = document.querySelector('.header_nav')
        burgerBtn.classList.toggle('burger-btn-active')
        nav.classList.toggle('header_nav_active')
    }
    return (
        <header>
            <section className="header_section">
                <Logo/>
                <HeaderNav/>
                <a onClick={burgerMenuToggle} className="burger-btn" href="#"><span></span></a>
            </section>
        </header>
    );
};

export default Header;