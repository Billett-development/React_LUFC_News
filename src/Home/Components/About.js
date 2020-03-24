import React, { useState, useEffect } from "react";

import Navbar from "../../Common/Components/Navbar";
import AboutTimeline from "../../Common/Components/AboutTimeline";

import { Segment } from "semantic-ui-react";

export default function AboutPage() {

    const [data, setData] = useState([]);

    const dataIsLoaded = data.acf !== undefined ? true : false;
  
  
    useEffect(() => {
  
      function getData() {
  
        fetch("http://localhost/LUFC_news/wp-json/acf/v3/pages/24")
              .then(response => response.json())
              .then(data => setData(data));
  
           //console.log(data.acf);
      }
          getData();
  
    }, [dataIsLoaded]);
    
    return(

        <Segment>
        <Navbar />
        <AboutTimeline info={data.acf}/>
        </Segment>
    )
}