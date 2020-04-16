import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import img from '../../Images/Common/leeds-players.jpg'
import {useParams} from "react-router-dom";
import '../Styles/_SinglePost.scss';
import { IoIosArrowDropleft, IoIosArrowDropright  } from "react-icons/io";

const DEFAULT_CLASSNAME = "news";


export default function SinglePost(posts) {

    let { id } = useParams();

    // this is post data sent over from the homepage fetch
    let result = posts.posts;

    // map over the info sent over grab the post _ id 
    const NextPrevId = result.map((post) => (post.id));

    const NextPrevTitle = result.map((post) => (post.title.rendered));

    // this is converting current id into integer
    let newID = parseInt(id)

    // find the index of the id in the array
    let indexofid = NextPrevId.indexOf(newID)
      
    // get the next highest value index
    let prevValue = indexofid + 1;

    // get the next lowest index
    let nextValue = indexofid - 1;
    
    let nextPostId = NextPrevId[nextValue];
    let prevPostId = NextPrevId[prevValue];

    let nextPostTitle = NextPrevTitle[nextValue];
    let prevPostTitle = NextPrevTitle[prevValue];

    if (nextPostTitle === undefined){
      nextPostTitle = NextPrevTitle[0]
      nextPostId = NextPrevId[0];
    } else if (prevPostTitle === undefined){
      prevPostTitle = NextPrevTitle[0];
      prevPostId = NextPrevId[0];
    }
    
    const [data, setData] = useState([]);
    let [newPost] = useState(false);
    const dataIsLoaded = data.acf !== undefined ? true : false;
        
    useEffect(() => {
  
      function getWordpressPost() {
        fetch(`http://localhost/LUFC_news/wp-json/wp/v2/posts/${id}?_embed`)
          .then((response) => response.json())
          .then((data) => setData(data));
      } 
        getWordpressPost();
        
    }, [dataIsLoaded, newPost]);

  return (
    <div className="section-post">
      <div className="container">
        <div className="post" >
            <div className="post__image">
                <img src={data._embedded !== undefined ? data._embedded["wp:featuredmedia"]["0"].source_url : ""} alt={data._embedded !== undefined ? data._embedded["wp:featuredmedia"]["0"].alt_text : ""}/>
            </div>
            <div className="post__title">
                <h2>{data.title !== undefined ? data.title.rendered : ""}</h2>
            </div>
            <div className="post__details">
                <h3>Written by {data._embedded !== undefined ? data._embedded["author"]["0"].name : ""} on {data.date !== undefined ? data.date.slice(0, 9) : ""}</h3>
            </div>
            <div className="post__info"
                dangerouslySetInnerHTML={{__html:data.content !== undefined ? data.content.rendered : ""}}>
            </div>



              <div className="post__buttons">
                <div className="post__buttons-labels">
                  <div>Last Post:</div>
                  <div>Next Post:</div>
                </div>
                
                <div className="post__buttons-container">
                    <Link to={`${nextPostId}`}>
                    <div onClick={newPost = true} className="post__buttons-left">
                      <IoIosArrowDropleft className="arrow-left-icon"/>{nextPostTitle}
                    </div>
                  </Link>

                  <Link to={`${prevPostId}`}>
                    <div onClick={newPost = true} className="post__buttons-right">
                      {prevPostTitle}<IoIosArrowDropright className="arrow-right-icon"/>
                    </div>
                  </Link>
                
                </div>

              </div>

        </div>
      </div>
    </div>
  );
}