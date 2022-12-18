import React from 'react';
import './PriceCard.css';

const PriceCard = ({price, title,children}) => {
    return (
        <div className="sub_item flex">
            <div className="sub_item_title">
                <h2>{title}</h2>
            </div>
            <div className="sub_item_cost">
                <span>{price}</span>
            </div>
            <div className="sub_item_info flex">
                <span>Доступно:</span>
                {children}
            </div>
            <div className="sub_item_btn">
                <button>Выбрать</button>
            </div>
        </div>
    );
};

export default PriceCard;