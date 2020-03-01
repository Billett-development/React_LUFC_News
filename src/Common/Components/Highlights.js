import React from "react";
import Logo from "../../Images/Common/lufc-logo-lg.png";


import '../Styles/_Highlights.scss';

const DEFAULT_CLASSNAME = "hero";

export default function Hightlights() {
    return(
    <div className="section-highlights">
        <div className="container">
        <div className="highlights">
            <div className="highlights__heading">
                <h3 className="section-headings">recent highlights</h3>
            </div>

            <div className="highlights__video">
                <iframe width="100%" height="100%" title="youtube video"
                    src="https://www.youtube.com/embed/SX6p2nnZ6NM" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>

            <div className="highlights__credit">
                Credit for the video: 
            </div>
    </div>
    </div>
    </div>
    );
}