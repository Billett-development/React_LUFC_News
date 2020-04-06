import React, { useState, useEffect } from "react";


import HeroVideo from "../../Common/Components/HeroVideo";
import HeroOverlay from "../../Common/Components/HeroOverlay";
import RecentNews from "../../Common/Components/RecentNews";
import About from "../../Common/Components/About";
import Highlights from "../../Common/Components/Highlights";
import Products from "../../Common/Components/Products";
import Partners from "../../Common/Components/Partners";
import Footer from "../../Common/Components/Footer";

import { Segment } from "semantic-ui-react";

export default function Home() {

    const [data, setData] = useState([]);

    const dataIsLoaded = data.acf !== undefined ? true : false;
  
  
    useEffect(() => {
  
      function getData() {
  
        fetch("http://localhost/LUFC_news/wp-json/acf/v3/pages/24?_embed")
              .then(response => response.json())
              .then(data => setData(data));
      }
          getData();
  
    }, [dataIsLoaded]);
    
    return (
        <Segment>
        <HeroVideo />
        <HeroOverlay />
        <RecentNews RecentNews={data.acf} />
        <About AboutInfo={data.acf} />
        <Highlights />
        <Products Products={data.acf}/>
        <Partners Partners={data.acf}/>
        <Footer />
        </Segment>
    )




}