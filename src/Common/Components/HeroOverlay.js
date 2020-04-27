import React from "react";
import Logo from "../../Images/Common/lufc-logo-lg.png";


import '../Styles/_HeroOverlay.scss';

const DEFAULT_CLASSNAME = "hero";

export default function HeroOverlay() {
    return(
        <div className={DEFAULT_CLASSNAME}>
        <div className={`${DEFAULT_CLASSNAME}__header`}>
            <h1 className={`${DEFAULT_CLASSNAME}__header-title`}>
                for the fans
            </h1>
        </div>
        <div className={`${DEFAULT_CLASSNAME}__logo-img`}>
            <img src={Logo} alt="leeds united fan club logo" />
        </div>
    </div>
    );
}