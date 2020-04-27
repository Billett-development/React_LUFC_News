import React, { useState, useEffect }  from "react";
import { Link } from 'react-router-dom';

import '../Styles/_RecentNews.scss';

const DEFAULT_CLASSNAME = "news";


export default function AllNews(posts) {

    const postData = posts.posts;

    const AllPosts = postData.map((post) => (
        
        <div className="news__articles-item" alt={post._embedded["wp:featuredmedia"]["0"].alt_text} key={post.id.rendered}
          style={{
            backgroundImage: `url(${post._embedded["wp:featuredmedia"]["0"].source_url}})`,
          }}
        >
        <Link to={`post/${post.id}`}> <div className="news__articles-item-overlay">
            <div className="news__articles-item-text">
              <h2>{post.title.rendered}</h2>
              <p dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}  />
            </div>
          </div></Link>
        </div>
      ));

  return (
    <div style={{marginTop: "15rem"}} className="section-news">
      <div className="container">
        <div className="news__heading">
          <h1  className="section-headings">LUFC News</h1>
        </div>
        <div>
        <div className="news__articles">{AllPosts}</div>
        </div>
      </div>
    </div>
  );
}