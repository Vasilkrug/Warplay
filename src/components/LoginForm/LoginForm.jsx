import React from 'react';
import RouterButton from "../../UI/RouterButton/RouterButton";
import MyButton from "../../UI/MyButton/MyButton";
import IconsLinksList from "../IconsLinksList/IconsLinksList";
import {loginIcons} from "../../assets/img/formLinksIcons/assets";
import './LoginForm.css';

const LoginForm = ({activeButton, getActiveButton}) => {
    return (
        <form className="login_form">
            <div className="login_form_title">
                <RouterButton path="/"/>
                <span
                    className={activeButton === 'Регистрация' ? 'active-btn' : ''}
                    onClick={(event) => getActiveButton(event)}>Регистрация
                </span>
                <span
                    className={activeButton === 'Вход' ? 'active-btn' : ''}
                    onClick={(e) => getActiveButton(e)}>Вход
                </span>
            </div>
            <label>
                <input className="post_input" type="text" placeholder='Почта / Телефон'/>
            </label>
            <label>
                <input className="pass_input" type="text" placeholder="Пароль"/>
            </label>
            {activeButton === 'Регистрация'
                ? <MyButton text='Зарегистрироваться'/>
                : <MyButton text='Войти'/>}
            <label className="chk_label">
                <input className="chk_input" type="checkbox"/>
                {activeButton === 'Регистрация'
                    ? <p>Я соглашаюсь со следующими установленными правилами:
                        Политика использования файлов cookie WARPLAY.CLOUD, Пользовательское соглашение WARPLAY.CLOUD,
                        Лицензионное соглашение MY.GAMES с конечным пользователем в отношении Игр,
                        Лицензионное соглашение с конечным Пользователем для WARPLAY.CLOUD Игрового центра,
                        Политика конфиденциальности портала WARPLAY.CLOUD,
                        Политика конфиденциальности WARPLAY.CLOUD для детей</p>
                    : <p>Запомнить</p>
                }
            </label>
            <div className="form_links">
                <div className="form_links_title">
                    <span>Войти через</span>
                </div>
                <IconsLinksList icons={loginIcons} classNames="form_links_icons"/>
            </div>
        </form>
    );
};

export default LoginForm;