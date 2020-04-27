import React, { useState, useEffect } from "react";

import Teamsheet from "../../Common/Components/Teamsheet";
export default function TeamSheet(){

    const [data, setData] = useState([]);

    const dataIsLoaded = data.acf !== undefined ? true : false;

    useEffect(() => {

    function getData() {

        fetch("http://localhost/LUFC_news/wp-json/acf/v3/pages/203?_embed") 
            .then(response => response.json())
            .then(data => setData(data));
    }
        getData();

    }, [dataIsLoaded]);
    
    return(
    <React.Fragment>
        <Teamsheet Teamsheet={data.acf} />
    </React.Fragment>
    );
}