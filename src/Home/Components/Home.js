import React from "react";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'





import Navbar from "../../Common/Components/Navbar";
import HeroVideo from "../../Common/Components/HeroVideo";
import HeroOverlay from "../../Common/Components/HeroOverlay";
import RecentNews from "../../Common/Components/RecentNews";
import About from "../../Common/Components/About";
import Highlights from "../../Common/Components/Highlights";
import Products from "../../Common/Components/Products";
import Partners from "../../Common/Components/Partners";
import Footer from "../../Common/Components/Footer";


import aboutPage from './About';
import contactPage from './Contact';
import lufcLive from './Lufc_live';

import { Segment } from "semantic-ui-react";

export default function Routing() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={aboutPage} />
          <Route path="/lufcLive" component={lufcLive} />
          <Route path="/contact"  component={contactPage}/>
        </Switch>
      </div>
    </Router>
    
  );
}

const Home = () => (

  <Segment>
  <HeroVideo />
  <HeroOverlay />
  <RecentNews />
  <About />
  <Highlights />
  <Products />
  <Partners />
  <Footer />
</Segment>

);
