import React from 'react';
import MyNavigation from "../MyNavigation/MyNavigation";
import IconsLinksItem from "../IconsLinksItem/IconsLinksItem";
import {footerIcons} from "../../assets/img/icons/assets";

const IconsLinksList = () => {
    return (
        <MyNavigation myClass="footer_icons_links">
            {footerIcons.map(item => {
                return <IconsLinksItem path={item}/>
            })}
        </MyNavigation>
    );
};

export default IconsLinksList;