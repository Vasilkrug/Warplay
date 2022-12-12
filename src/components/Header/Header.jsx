import React from 'react';
import "./Header.css"
const Header = () => {
    return (
        <header>
         <section>
             <nav className="header_nav">
                 <ul className="header_nav_list">
                     <li className="logo">
                         <div className="logo_img">
                             <img src="img/icons/blue-logo.png" alt=""/>
                         </div>
                         <div className="logo_text">
                             <span><span>WARPLAY.CLOUD</span></span>
                         </div>
                     </li>
                     <li><a href="">Главная</a></li>
                     <li><a href="">Сервера</a></li>
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