import React from "react";


import '../Styles/_Highlights.scss';

const DEFAULT_CLASSNAME = "highlights";

export default function Hightlights() {
    return(
    <div className="section-highlights">
        <div className="container">
        <div className={DEFAULT_CLASSNAME}>
            <div className={`${DEFAULT_CLASSNAME}__heading`}>
                <h3 className="section-headings">recent highlights</h3>
            </div>

            <div className={`${DEFAULT_CLASSNAME}__video`}>
                <iframe width="100%" height="100%" title="youtube video"
                    src="https://www.youtube.com/embed/SX6p2nnZ6NM" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>

            <div className={`${DEFAULT_CLASSNAME}__credit`}>
                Credit for the video: 
            </div>
    </div>
    </div>
    </div>
    );
}