import React from "react";
import Image_1 from "../../Images/Common/leeds-players.jpg";
import Image_2 from "../../Images/Common/leeds-player-2.jpg";
import Image_3 from "../../Images/Common/leeds-image.jpg";

import '../Styles/_About.scss';

const DEFAULT_CLASSNAME = "hero";

export default function About(AboutObject) {

    const AboutInfoResult = AboutObject.AboutInfo;

    return(
        <div className="section-about">
            <div className="container">
                <div className="about">
                        <div className="about__info">
                            <h3>{AboutInfoResult !== undefined ? AboutInfoResult.about_title : ""}</h3>
                            <p>{AboutInfoResult !== undefined ? AboutInfoResult.about_description : ""}</p>
                            
                        </div>
                        <div className="about__images">
                            <div className="composition">

                                <img 
                                    alt="lufc about 1"
                                    className="composition__photo composition__photo--p1"
                                    src={AboutInfoResult !== undefined ? AboutInfoResult.about_image_back.url: ""} />
                                <img 
                                    alt="lufc about 2"
                                    className="composition__photo composition__photo--p2"
                                    src={AboutInfoResult !== undefined ? AboutInfoResult.about_image_middle.url: ""} />
                                <img 
                                    alt="lufc about 3"
                                    className="composition__photo composition__photo--p3"
                                    src={AboutInfoResult !== undefined ? AboutInfoResult.about_image_front.url: ""} />
                            </div>

                        </div>
                </div>
            </div>
            </div>
    );
}