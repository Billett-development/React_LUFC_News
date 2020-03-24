import React from "react";

import Navbar from "../../Common/Components/Navbar";
import Contact from "../../Common/Components/Contact";
import Footer from "../../Common/Components/Footer";

import { Segment } from "semantic-ui-react";

export default function ContactPage() {


    return(
        <Segment>
            <Navbar />
            <Contact />
            <Footer />
        </Segment>
    );
}