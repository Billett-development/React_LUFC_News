import React, { useState, useEffect } from "react";

import SinglePost from "../../Common/Components/SinglePost";


import { Segment } from "semantic-ui-react";

export default function Post() {

    const [aboutData, setaboutData] = useState([]);
  
    const dataIsLoaded = aboutData.acf !== undefined ? true : false;
  
    useEffect(() => {
      function getACFData() {
        fetch("http://localhost/LUFC_news/wp-json/wp/v2/posts")
          .then((response) => response.json())
          .then((aboutData) => setaboutData(aboutData));
      }

      getACFData();
      
    }, [dataIsLoaded]);
    
    return(
        <Segment>
            <SinglePost posts={aboutData} />
        </Segment>
    )
}