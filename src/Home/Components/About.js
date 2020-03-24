import React, { useState, useEffect } from "react";

import Navbar from "../../Common/Components/Navbar";
import AboutTimeline from "../../Common/Components/AboutTimeline";

import { Segment } from "semantic-ui-react";

export default function AboutPage() {


    
    return(

        <Segment>
        <Navbar />
        <AboutTimeline />
        </Segment>
    )
}