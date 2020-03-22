import React from "react";
import Image_1 from "../../Images/Common/leeds-players.jpg";
import Image_2 from "../../Images/Common/leeds-player-2.jpg";
import Image_3 from "../../Images/Common/leeds-image.jpg";

import '../Styles/_About.scss';

const DEFAULT_CLASSNAME = "hero";

export default function About() {
    return(
<div className="section-about">
    <div className="container">
        <div className="about">
                <div className="about__info">
                    <h3>about lufc news</h3>
                    <p>Lufcnews was founded in May 2017 by Alex Matthews, the sole owner & developer of the Lufcnews brand. Join the Lufcnews community today and 
                    keep updated with all the latest on Leeds United, including Live scores, polls, highlights, match reports and anything Leeds United related.</p>
                    
                </div>
                <div className="about__images">
                    <div className="composition">

                        <img 
                             alt="lufc about 1"
                             className="composition__photo composition__photo--p1"
                             src={Image_1} />

                        <img 
                             alt="lufc about 2"
                             className="composition__photo composition__photo--p2"
                             src={Image_2} />

                        <img 
                             alt="lufc about 3"
                             className="composition__photo composition__photo--p3"
                             src={Image_3} />

                    </div>

                </div>
        </div>
    </div>
    </div>
    );
}