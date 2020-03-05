import React from "react";
import Logo from "../../Images/Common/lufc-logo-lg.png";


import '../Styles/_Partners.scss';

const DEFAULT_CLASSNAME = "hero";

export default function HeroOverlay() {
    return(
    <div className="section-partners">
        <div className="container">
        <div className="partners__heading">
            <h3 className="section-headings">our partners</h3>
        </div>
        
        <div className="partners">
            <div className="partners__1"></div>
            <div className="partners__2"></div>
            <div className="partners__3"></div>
            <div className="partners__4"></div>
        </div>
    </div>
    </div>
    );
}