import React from 'react';
import './Contacts.css';
import IconsLinksList from "../../components/IconsLinksList/IconsLinksList";
import RouterButton from "../../UI/RouterButton/RouterButton";

const Contacts = () => {
    return (
        <div className="contacts flex">
            <div className="contacts_title flex gap30">
                <RouterButton path="/"/>
                <h2>Контакты</h2>
            </div>
            <IconsLinksList/>
        </div>
    );
};

export default Contacts;