import React from "react";
import '../Styles/_Partners.scss';


export default function HeroOverlay(PartnersObject) {

    const PartnersResult = PartnersObject.Partners;
    
    if (PartnersResult !== undefined) {
      const partnerItem = PartnersResult.partnerrepeater.map(
        (partner) => (
          <div className="partners__item" key={partner.id}>
            <img src={partner.image.url} alt={partner.image.alt}/>
          </div>
        )
      );
  
      return (
        <div className="section-partners">
          <div className="container">
            <div className="partners__heading">
              <h1 className="section-headings">
                {/* {ParnersResult !== undefined ? ParnersResult.partners_header : ""} */}
                Partners
              </h1>
            </div>
            <div className="partners">{partnerItem}</div>
          </div>
        </div>
      );
    }
    return null;
}
