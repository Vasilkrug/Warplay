import React from 'react';
import './StartPlayingDescription.css';
import Title from "../../UI/Title/Title";
import Link from "../../UI/Link/Link";
import IconsList from "../IconsList/IconsList";

const StartPlayingDescription = () => {
    return (
        <section className="start_description">
            <Title text="Быстрый старт"/>
            <h2>Начни играть</h2>
            <IconsList/>
            <Link text='Начать'/>
        </section>
    );
};

export default StartPlayingDescription;