
import React from "react";

import '../Styles/_RecentNews.scss';

const DEFAULT_CLASSNAME = "news";


export default function RecentNews(RecentObject) {

    const RecentNewsResult = RecentObject.RecentNews;

  return (

    <div className="section-news">
    <div className="container">
        <div className={`${DEFAULT_CLASSNAME}__heading`}>
                <h3 className="section-headings">{RecentNewsResult !== undefined ? RecentNewsResult.recent_news_title : ""}</h3>
        </div>

        <div className={`${DEFAULT_CLASSNAME}__articles`}>
        <div className={`${DEFAULT_CLASSNAME}__articles-1`}>
            <div className={`${DEFAULT_CLASSNAME}__articles-1-overlay`}>
                <div className={`${DEFAULT_CLASSNAME}__articles-1-text`}>
                    <h3>{RecentNewsResult !== undefined ? RecentNewsResult.top_left_description : ""}</h3>
                    <p>{RecentNewsResult !== undefined ? RecentNewsResult.top_left_sub_description : ""}</p>
                </div>
            </div>
        </div>

        <div className={`${DEFAULT_CLASSNAME}__articles-2`}>
            <div className={`${DEFAULT_CLASSNAME}__articles-2-overlay`}>
                <div className={`${DEFAULT_CLASSNAME}__articles-2-text`}>
                <h3>{RecentNewsResult !== undefined ? RecentNewsResult.top_right_description : ""}</h3>
                <p>{RecentNewsResult !== undefined ? RecentNewsResult.top_right_sub_description : ""}</p>
                </div>
            </div>
        </div>

        <div className={`${DEFAULT_CLASSNAME}__articles-3`}>
            <div className={`${DEFAULT_CLASSNAME}__articles-3-overlay`}>
                <div className={`${DEFAULT_CLASSNAME}__articles-3-text`}>
                <h3>{RecentNewsResult !== undefined ? RecentNewsResult.bottom_left_description : ""}</h3>
                <p>{RecentNewsResult !== undefined ? RecentNewsResult.bottom_left_sub_description : ""}</p>
                </div>
            </div>
        </div>
        <div className={`${DEFAULT_CLASSNAME}__articles-4`}>
            <div className={`${DEFAULT_CLASSNAME}__articles-4-overlay`}>
                <div className={`${DEFAULT_CLASSNAME}__articles-4-text`}>
                <h3>{RecentNewsResult !== undefined ? RecentNewsResult.bottom_right_description : ""}</h3>
                <p>{RecentNewsResult !== undefined ? RecentNewsResult.bottom_right_sub_description : ""}</p>
                </div>
            </div>
        </div>
    </div>

    <div className={`${DEFAULT_CLASSNAME}__articles-btn`}>
        <a href="index.js" className="btn-inverse">{RecentNewsResult !== undefined ? RecentNewsResult.recent_news_button : ""}</a>
    </div>

</div>
</div>


  );
}