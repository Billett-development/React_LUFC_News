import React, { useState, useEffect } from "react";

import AboutTimeline from "../../Common/Components/AboutTimeline";


export default function AboutPage() {

    const [data, setData] = useState([]);
    const [aboutData, setaboutData] = useState([]);
  
    const dataIsLoaded =
      data !== undefined && aboutData.acf !== undefined ? true : false;
  
    useEffect(() => {
      function getACFData() {
        fetch("http://localhost/LUFC_news/wp-json/acf/v3/pages/104?_embed")
          .then((response) => response.json())
          .then((aboutData) => setaboutData(aboutData));
      }

      getACFData();
      
    }, [dataIsLoaded]);

    
    return(
      <React.Fragment>
        <AboutTimeline aboutInfo={aboutData.acf}/>
      </React.Fragment>
    )
}