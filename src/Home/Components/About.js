import React from "react";

import Navbar from "../../Common/Components/Navbar";
import AboutTimeline from "../../Common/Components/AboutTimeline";

import { Segment } from "semantic-ui-react";

export default function aboutPage() {
    return(
        <Segment>
        <Navbar />
        <AboutTimeline />
        </Segment>
    )
}