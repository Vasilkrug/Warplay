import React from 'react';
import "./Header.css"
const Header = () => {
    return (
        <header>
         <section className="header_section">
             <div className="logo">
                 <div className="logo_img">
                     <img src={require('../../assets/img/icons/blue-logo.png')} alt=""/>
                 </div>
                 <div className="logo_text">
                     <span>WARPLAY.CLOUD</span>
                 </div>
             </div>
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
         </section>
        </header>
    );
};

export default Header;