import React, { useState, useEffect }  from "react";
import { Link } from 'react-router-dom';

import '../Styles/_RecentNews.scss';

const DEFAULT_CLASSNAME = "news";


export default function AllNews(posts) {

    const postData = posts.posts;


    const AllPosts = postData.map((post) => (
        
        <div className="news__articles-item" key={post.id.rendered}
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
    <div style={{marginTop: "15rem"}} className="section-news">
      <div className="container">
        <div className="news__heading">
          <h3  className="section-headings">LUFC News</h3>
        </div>
        <div>
        <div className="news__articles">{AllPosts}</div>
        </div>
      </div>
    </div>
  );
}