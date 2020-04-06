import React from "react";
import Bounce from 'react-reveal/Bounce';

import Logo from "../../Images/Common/lufc-logo-lg.png";
import Army from "../../Images/Common/Army-photo.jpg";
import Univ from "../../Images/Common/university-of-winchester.png";
import Stats from "../../Images/Common/lufc-stats.jpg";


import '../Styles/_AboutTimeline.scss';

const DEFAULT_CLASSNAME = "timeline";


export default class AboutTimeline extends React.Component {


render(){
    return(
    <div className="section-timeline">
        <div className="container">
            <div className={DEFAULT_CLASSNAME}>

                <div className={`${DEFAULT_CLASSNAME}__container ${DEFAULT_CLASSNAME}__left`}>
                    <Bounce left>
                        <div className={`${DEFAULT_CLASSNAME}__content`}>
                            <div className={`${DEFAULT_CLASSNAME}__content-head`}>
                                <h5>post 1</h5>
                                <span>May 2017</span>
                            </div>
                            <div className={`${DEFAULT_CLASSNAME}__content-info`}>
                                <p>Lufcnews was founded in May 2017 by Alex Matthews, the sole owner & developer of the Lufcnews brand. 
                                </p>
                            </div>
                            <div className={`${DEFAULT_CLASSNAME}__content-img`}>
                                <img src={Logo} alt="" />
                            </div> 
                        </div> 
                    </Bounce>
                </div>

        <div className={`${DEFAULT_CLASSNAME}__container ${DEFAULT_CLASSNAME}__right`}>
                <Bounce right>
                    <div className={`${DEFAULT_CLASSNAME}__content`} >
                        <div className={`${DEFAULT_CLASSNAME}__content-head`}>
                            <span>Jan 14 2018</span>
                            <h5>Title section 1</h5>
                        </div>
                        <div className={`${DEFAULT_CLASSNAME}__content-info`}>
                            <p>After serving five years in the British Army, including an operational tour of Afghanistan, Alex decided to pursue one of his hobbies and set up a fan site for Leeds United. 
                            </p>
                        </div>
                        <div className={`${DEFAULT_CLASSNAME}__content-img`}>
                            <img src={Army} alt="" />
                        </div> 
                    </div>
                </Bounce>
        </div>

        <div className={`${DEFAULT_CLASSNAME}__container ${DEFAULT_CLASSNAME}__left`}>
            <Bounce left>
                <div className={`${DEFAULT_CLASSNAME}__content`}>
                    <div className={`${DEFAULT_CLASSNAME}__content-head`}>
                        <h5>Title section 1</h5>
                        <span>October 2017</span>
                    </div>
                    <div className={`${DEFAULT_CLASSNAME}__content-info`}>
                        <p>Back in Oct 2017, our Owner Alex Matthews pitched Lufcnews along with another project to over 20 students at the University of Winchester - landing a team of 5 students to develop and design the Lufcnews brand. 
                        </p>
                    </div>
                    <div className={`${DEFAULT_CLASSNAME}__content-img`}>
                        <img src={Univ} alt="" />
                    </div> 
                </div> 
                </Bounce>
        </div>
        <div className={`${DEFAULT_CLASSNAME}__container ${DEFAULT_CLASSNAME}__right`}>
        <Bounce right>
            <div className={`${DEFAULT_CLASSNAME}__content`}>
                <div className={`${DEFAULT_CLASSNAME}__content-head`}>
                    <span>Jan 2018</span>
                    <h5>Title section 1</h5>
                </div>
                <div className={`${DEFAULT_CLASSNAME}__content-info`}>
                    <p>Since the inception of the students gained from the University of Winchester - ​Lufcnews had a following of around 1,500 followers back in October 2017 and now has an ever growing organic following of over 15,000+ followers reaching millions of users on a monthly basis.  
                    </p>
                </div>
                <div className={`${DEFAULT_CLASSNAME}__content-img`}>
                    <img src={Stats} alt=""/>
                </div> 
            </div>
            </Bounce>
    </div>

</div>
        </div>
    </div>

    )
}
}