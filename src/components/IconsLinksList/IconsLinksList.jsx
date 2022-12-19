import React from 'react';
import IconsLinksItem from "../IconsLinksItem/IconsLinksItem";


const IconsLinksList = ({classNames, icons}) => {

    return (
        <div className={classNames}>
            {icons.map(item => <IconsLinksItem key={item} path={item}/>)}
        </div>
    );
};

export default IconsLinksList;