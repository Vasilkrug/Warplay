import React from 'react';
import "./Header.css"
import Logo from "../Logo/Logo";
import HeaderNav from "../HeaderNav/HeaderNav";

const Header = () => {
    return (
        <header>
            <section className="header_section">
                <Logo/>
                <HeaderNav/>
            </section>
        </header>
    );
};

export default Header;