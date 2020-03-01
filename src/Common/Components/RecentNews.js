import React from "react";
import { Grid } from "semantic-ui-react";

import '../Styles/_RecentNews.scss';

const DEFAULT_CLASSNAME = "news";


export default function RecentNews() {
  return (
    <div className="section-news">
    <div className="container">
        <div className="news__heading">
            <h3 className="section-headings">recent news</h3>
        </div>

        <div className="news__articles">
        <div className="news__articles-1">
            <div className="news__articles-1-overlay">
                <div className="news__articles-1-text">
                    <h3>PLACEHOLDER</h3>
                    <p>Place holder text info</p>
                </div>
            </div>
        </div>
        <div className="news__articles-2">
            <div className="news__articles-2-overlay">
                <div className="news__articles-2-text">
                    <h3>PLACEHOLDER</h3>
                    <p>Place holder text info</p>
                </div>
            </div>
        </div>
        <div className="news__articles-3">
            <div className="news__articles-3-overlay">
                <div className="news__articles-3-text">
                    <h3>PLACEHOLDER</h3>
                    <p>Place holder text info</p>
                </div>
            </div>
        </div>
        <div className="news__articles-4">
            <div className="news__articles-4-overlay">
                <div className="news__articles-4-text">
                    <h3>PLACEHOLDER</h3>
                    <p>Place holder text info</p>
                </div>
            </div>
        </div>
    </div>

    <div className="news__articles-btn">
        <a href="index.js" className="btn-inverse">click to see more news</a>
    </div>

</div>
</div>
  );
}