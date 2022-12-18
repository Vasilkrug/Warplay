import React from 'react';
import IconsLinksItem from "../IconsLinksItem/IconsLinksItem";
import {footerIcons} from "../../assets/img/icons/assets";

const IconsLinksList = () => {
    return (
        <div className="icons_links flex gap30">
            {footerIcons.map(item => {
                return <IconsLinksItem path={item}/>
            })}
        </div>
    );
};

export default IconsLinksList;