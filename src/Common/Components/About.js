import React from "react";

import '../Styles/_About.scss';

const DEFAULT_CLASSNAME = "about";

export default function About(AboutObject) {

    const AboutInfoResult = AboutObject.AboutInfo;

    return(
        <div className="section-about">
            <div className="container">
                <div className={DEFAULT_CLASSNAME}>
                        <div className={`${DEFAULT_CLASSNAME}__info`}>
                            <h1 className="section-headings">{AboutInfoResult !== undefined ? AboutInfoResult.about_title : ""}</h1>
                            <p>{AboutInfoResult !== undefined ? AboutInfoResult.about_description : ""}</p>
                            
                        </div>
                        <div className={`${DEFAULT_CLASSNAME}__images`}>
                            <div className="composition">

                                <img 
                                    alt={AboutInfoResult !== undefined ? AboutInfoResult.about_image_back.alt: ""}
                                    className="composition__photo composition__photo--p1"
                                    src={AboutInfoResult !== undefined ? AboutInfoResult.about_image_back.url: ""} />
                                <img 
                                    alt={AboutInfoResult !== undefined ? AboutInfoResult.about_image_middle.alt: ""}
                                    className="composition__photo composition__photo--p2"
                                    src={AboutInfoResult !== undefined ? AboutInfoResult.about_image_middle.url: ""} />
                                <img 
                                    alt={AboutInfoResult !== undefined ? AboutInfoResult.about_image_front.alt: ""}
                                    className="composition__photo composition__photo--p3"
                                    src={AboutInfoResult !== undefined ? AboutInfoResult.about_image_front.url: ""} />
                            </div>

                        </div>
                </div>
            </div>
            </div>
    );
}