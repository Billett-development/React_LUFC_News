import React from "react";

import '../Styles/_Highlights.scss';

const DEFAULT_CLASSNAME = "highlights";

export default function Hightlights(data) {

    const YoutubeData = data.YoutubeVideo
    return(
    <div className="section-highlights">
        <div className="container">
        <div className={DEFAULT_CLASSNAME}>
            <div className={`${DEFAULT_CLASSNAME}__heading`}>
                <h1 className="section-headings">recent highlights</h1>
            </div>

            <div className={`${DEFAULT_CLASSNAME}__video`}>
                <iframe width="100%" height="100%" title={YoutubeData !== undefined ? YoutubeData.video_title : ""}
                    src={YoutubeData !== undefined ? YoutubeData.video_src : ""} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>

            <div className={`${DEFAULT_CLASSNAME}__credit`}>
                Credit: {YoutubeData !== undefined ? YoutubeData.video_credit : ""}
            </div>
    </div>
    </div>
    </div>
    );
}