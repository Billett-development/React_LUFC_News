import React from "react";
import Logo from "../../Images/Common/lufc-logo-lg.png";


import '../Styles/_Partners.scss';

const DEFAULT_CLASSNAME = "hero";

export default function HeroOverlay(PartnersObject) {


    const ParnersResult = PartnersObject.Partners;

    console.log(ParnersResult)


    return(
    <div className="section-partners">
        <div className="container">
        <div className="partners__heading">
            <h3 className="section-headings">{ParnersResult !== undefined ? ParnersResult.partners_header : ""}</h3>
        </div>
        
        <div className="partners">
            <div className="partners__1">
                <img src={ParnersResult !== undefined ? ParnersResult.partner_image_1.url: ""} />
            </div>
            <div className="partners__2">
            <img src={ParnersResult !== undefined ? ParnersResult.partner_image_2.url: ""} />
              </div>
            <div className="partners__3">
            <img src={ParnersResult !== undefined ? ParnersResult.partner_image_3.url: ""} />
              </div>
            <div className="partners__4">
            <img src={ParnersResult !== undefined ? ParnersResult.partner_image_4.url: ""} />
              </div>
        </div>
    </div>
    </div>
    );
}