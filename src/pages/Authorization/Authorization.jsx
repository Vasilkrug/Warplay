import React, {useState} from 'react';
import LoginForm from "../../components/LoginForm/LoginForm";
import './Authorization.css';

const Authorization = () => {
    const [activeButton, setActiveButton] = useState('');

    const getActiveButton = (e) => {
        setActiveButton(e.target.textContent)
    }

    return (
        <section className="authorization">
            <LoginForm activeButton={activeButton} getActiveButton={getActiveButton}/>
        </section>
    );
};

export default Authorization;