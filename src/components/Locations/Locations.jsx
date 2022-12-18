import React from 'react';
import './Locations.css';
import Title from "../../UI/Title/Title";

const Locations = () => {
    return (
        <section className="servers_location flex gap30">
            <Title text="Cервера на карте"/>
            <h2>Карта локаций</h2>
            <div className="servers_map">

            </div>
        </section>
    );
};

export default Locations;