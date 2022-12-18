import React from 'react';
import './Subscriptions.css';
import PriceCard from "../../components/PriceCard/PriceCard";
import RouterButton from "../../UI/RouterButton/RouterButton";

const Subscriptions = () => {
    return (
        <div className="subscriptions flex">
            <div className="subscriptions_title flex gap30">
                <RouterButton path="/"/>
                <h2>Вернуться на главную</h2>
            </div>
            <div className="price_cards_list flex">
                <PriceCard title="Почасовая оплата" price="45 р. - час">
                    <span>Каталог игр</span>
                    <span>Виртуальный ПК</span>
                    <span>Безлимитная игровая сессия</span>
                </PriceCard>
                <PriceCard title="Подписка Минимум" price="1500 р. - месяц">
                    <span>Доступно:</span>
                    <span>Каталог игр</span>
                    <span>Игровая сессия 4 часов/день</span>
                </PriceCard>
                <PriceCard title="Подписка Максимум" price="2999 р. - месяц">
                    <span>Каталог игр</span>
                    <span>Виртуальный ПК</span>
                    <span>Игровая сессия 10 часов/день</span>
                </PriceCard>
            </div>
        </div>
    );
};

export default Subscriptions;