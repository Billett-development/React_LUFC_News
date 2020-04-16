import React, { useState, useEffect }  from "react";

import AllPosts from "../../Common/Components/AllPosts";


export default function AllNews() {

    const [data, setData] = useState([]);
    const dataIsLoaded = data.acf !== undefined ? true : false;

    useEffect(() => {
  
      function getWordpressPosts() {
        fetch(`http://localhost/LUFC_news/wp-json/wp/v2/posts?_embed`)
          .then((response) => response.json())
          .then((data) => setData(data));

      } 
        getWordpressPosts();
        
    }, [dataIsLoaded]);

  return (
    <AllPosts posts={data} />
  );
}