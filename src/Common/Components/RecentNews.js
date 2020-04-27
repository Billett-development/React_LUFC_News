import React from "react";
import { Link } from 'react-router-dom';

import '../Styles/_RecentNews.scss';

const DEFAULT_CLASSNAME = "news";


export default function RecentNews(RecentObject) {

    const RecentNewsResult = RecentObject.RecentNews;
    const posts = RecentNewsResult.slice(0, 4).map((post) => (
        
        <div className="news__articles-item" alt={post._embedded["wp:featuredmedia"]["0"].alt_text} key={post.id.rendered}
          style={{
            backgroundImage: `url(${post._embedded["wp:featuredmedia"]["0"].source_url}})`,
          }}
        >
        <Link to={`post/${post.id}`}> <div className="news__articles-item-overlay">
            <div className="news__articles-item-text">
              <h3>{post.title.rendered}</h3>
              <p dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}  />
            </div>
          </div></Link>
        </div>
      ));

  return (
    <div className="section-news">
      <div className="container">
        <div className="news__heading">
          <h1 className="section-headings">Recent News</h1>
        </div>
        <div>
        <div className="news__articles">{posts}</div>
        </div>
        <div className="news__articles-btn">
          <Link to="/news" className="btn-inverse">Click to see more news</Link>
        </div>
      </div>
    </div>
  );
}