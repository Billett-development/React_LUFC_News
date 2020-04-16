import React from "react";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from "../../Common/Components/Navbar";

import Home from './Home';
import AboutPage from './About';
import Post from './Post';
import ContactPage from './Contact';
import lufcLive from './Lufc_live';
import News from './News';
import lufczone from './Lufc_zone';
import Footer from "../../Common/Components/Footer";


export default function Routing() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={AboutPage} />
          <Route path="/lufcLive" component={lufcLive} />
          <Route path="/contact"  component={ContactPage}/>
          <Route path="/post/:id" component={Post} />
          <Route path="/news" component={News} />
          <Route path="/Lufc-Zone" component={lufczone} />
        </Switch>
        <Footer />
      </div>
    </Router>
    
  );
}

