import React from "react";
import { Segment } from 'semantic-ui-react';
import fanVideo from "../../Images/Common/Fan-club.mp4";


import '../Styles/_HeroVideo.scss';

const DEFAULT_CLASSNAME = "bg-video";

export default function HeroVideo() {
    return(
        <Segment className={DEFAULT_CLASSNAME}>
            <video loop autoPlay className={`${DEFAULT_CLASSNAME}__content`}>
                <source src={fanVideo} type="video/mp4"/>
                
            </video>
        </Segment>
    );
}