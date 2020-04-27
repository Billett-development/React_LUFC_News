import React, { useState, useEffect } from "react";


import Contact from "../../Common/Components/Contact";

export default function ContactPage() {

    const [homeData, setHomeData] = useState([]);

    const dataIsLoaded = homeData.acf !== undefined ? true : false;
  
    useEffect(() => {
  
      function getData() {
  
        fetch("http://localhost/LUFC_news/wp-json/acf/v3/pages/190?_embed")
              .then(response => response.json())
              .then(homeData => setHomeData(homeData));
      }
        getData();

    }, [dataIsLoaded]);

    return(
        <React.Fragment>
            <Contact contactInfo={homeData.acf} />
        </React.Fragment>
    );
}