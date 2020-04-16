import React from "react";


import '../Styles/_Partners.scss';

const DEFAULT_CLASSNAME = "partners";

export default function HeroOverlay(PartnersObject) {

    const PartnersResult = PartnersObject.Partners;
    console.log(PartnersResult);
    
    if (PartnersResult !== undefined) {
      const partnerItem = PartnersResult.partnerrepeater.map(
        (partner) => (
          <div className="partners__item" key={partner.id}>
            <img src={partner.image.url} />
          </div>
        )
      );
  
      return (
        <div className="section-partners">
          <div className="container">
            <div className="partners__heading">
              <h3 className="section-headings">
                {/* {ParnersResult !== undefined ? ParnersResult.partners_header : ""} */}
                Partners
              </h3>
            </div>
            <div className="partners">{partnerItem}</div>
          </div>
        </div>
      );
    }
    return null;
}
