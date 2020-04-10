import React from "react";
import Bounce from 'react-reveal/Bounce';

import '../Styles/_AboutTimeline.scss';

const DEFAULT_CLASSNAME = "timeline";


export default function AboutTimeline(TimelineData) {

    const TimelineResult = TimelineData.aboutInfo;

    if (TimelineResult !== undefined) {
      const timelineItem = TimelineResult.timeline_post.map((post, i) => {

        if (i % 2 === 0) {
            return (
            <div className="section-timeline">
            <div className="container">
                <div className={DEFAULT_CLASSNAME}>
                    <Bounce left>
                    <div className={`${DEFAULT_CLASSNAME}__container ${DEFAULT_CLASSNAME}__container-left`}>
                    <div className={`${DEFAULT_CLASSNAME}__content`}>
                        <div className={`${DEFAULT_CLASSNAME}__content-head`}>
                            <span>{post.post_date}</span>
                            <h5>{post.post_title}</h5>
                        </div>
                        <div className={`${DEFAULT_CLASSNAME}__content-info`}>
                            <p>{post.post_description}</p>
                        </div>
                        <div className={`${DEFAULT_CLASSNAME}__content-img`}>
                            <img src={post.post_image.url} alt={post.post_image.alt} />
                        </div> 
                    </div>
                </div>
                    </Bounce>
                </div>
            </div>
        </div>
            )
        } else {
            return (
                <div className="section-timeline">
                <div className="container">
                    <div className={DEFAULT_CLASSNAME}>
                        <Bounce right>
                        <div className={`${DEFAULT_CLASSNAME}__container ${DEFAULT_CLASSNAME}__container-right`}>
                        <div className={`${DEFAULT_CLASSNAME}__content`}>
                            <div className={`${DEFAULT_CLASSNAME}__content-head`}>
                                <span>{post.post_date}</span>
                                <h5>{post.post_title}</h5>
                            </div>
                            <div className={`${DEFAULT_CLASSNAME}__content-info`}>
                                <p>{post.post_description}</p>
                            </div>
                            <div className={`${DEFAULT_CLASSNAME}__content-img`}>
                                <img src={post.post_image.url} alt={post.post_image.alt} />
                            </div> 
                        </div>
                    </div>
                        </Bounce>
                    </div>
                </div>
            </div>
            )
      
        }
    }
        );
    return(
    <div className="section-timeline">
        <div className="container">
            <div className={DEFAULT_CLASSNAME}>
                {timelineItem}
            </div>
        </div>
    </div>
        );
    }

    return null;
}