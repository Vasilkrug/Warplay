import React from 'react';
import RouterButton from "../../UI/RouterButton/RouterButton";
import MyButton from "../../UI/MyButton/MyButton";
import './LoginForm.css';

const LoginForm = ({activeButton,getActiveButton}) => {
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
                <input type="text" placeholder='Почта / Телефон'/>
            </label>
            <label>
                <input type="text" placeholder="Пароль"/>
            </label>
            {activeButton === 'Регистрация'
                ? <MyButton text='Зарегистрироваться'/>
                : <MyButton text='Войти'/>}
        </form>
    );
};

export default LoginForm;