
import React from "react";

import '../Styles/_RecentNews.scss';

const DEFAULT_CLASSNAME = "news";


export default function RecentNews(RecentObject) {

    const RecentNewsResult = RecentObject.RecentNews;

    const posts = RecentNewsResult.map((post) => (
        
        <div
          className="news__articles-item"
          key={post.id.rendered}
          style={{
            backgroundImage: `url(${post._embedded["wp:featuredmedia"]["0"].source_url}})`,
          }}
        >
          <div className="news__articles-item-overlay">
            <div className="news__articles-item-text">
              <h3>{post.title.rendered}</h3>
              <p>{post.excerpt.rendered}</p>
            </div>
          </div>
        </div>
      ));

  return (
    <div className="section-news">
      <div className="container">
        <div className="news__heading">
          <h3 className="section-headings">Recent News</h3>
        </div>
        <div>
        <div className="news__articles">{posts}</div>
        </div>
        <div className="news__articles-btn">
          <a href="index.js" className="btn-inverse">
            Click to see more news
          </a>
        </div>
      </div>
    </div>
  );
}