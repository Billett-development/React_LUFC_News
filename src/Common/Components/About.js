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
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, 
                        nemo! Similique provident ex corporis eligendi omnis blanditiis. 
                        Molestiae id praesentium incidunt provident nesciunt fugiat animi, 
                        distinctio quo magni! Odit, deserunt.</p>
                    
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