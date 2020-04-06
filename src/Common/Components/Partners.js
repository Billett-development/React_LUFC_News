import React from "react";


import '../Styles/_Partners.scss';

const DEFAULT_CLASSNAME = "partners";

export default function HeroOverlay(PartnersObject) {

    const ParnersResult = PartnersObject.Partners;

    return(
    <div className="section-partners">
        <div className="container">
        <div className={`${DEFAULT_CLASSNAME}__heading`}>
            <h3 className="section-headings">{ParnersResult !== undefined ? ParnersResult.partners_header : ""}</h3>
        </div>
        
        <div className={DEFAULT_CLASSNAME}>
            <div className={`${DEFAULT_CLASSNAME}__1`}>
                <img alt="egg" src={ParnersResult !== undefined ? ParnersResult.partner_image_1.url: ""} />
            </div>
            <div className={`${DEFAULT_CLASSNAME}__2`}>
            <img alt="egg" src={ParnersResult !== undefined ? ParnersResult.partner_image_2.url: ""} />
              </div>
            <div className={`${DEFAULT_CLASSNAME}__3`}>
            <img alt="egg" src={ParnersResult !== undefined ? ParnersResult.partner_image_3.url: ""} />
              </div>
            <div className={`${DEFAULT_CLASSNAME}__4`}>
            <img alt="egg" src={ParnersResult !== undefined ? ParnersResult.partner_image_4.url: ""} />
              </div>
        </div>
    </div>
    </div>
    );
}