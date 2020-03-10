import React from 'react';

import Navbar from "../../Common/Components/Navbar";
import Lufclive from "../../Common/Components/Lufc_live";
import Footer from "../../Common/Components/Footer";

import { Segment } from "semantic-ui-react";

export default function lufcLive(){
    return(
    <Segment>
        <Navbar />
        <Lufclive />
        <Footer />
    </Segment>
    );
}