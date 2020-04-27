import React from "react";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from "../../Common/Components/Navbar";

import Home from './Home';
import AboutPage from './About';
import Post from './Post';
import ContactPage from './Contact';
import LufcLive from './Lufc_live';
import News from './News';
import Fixtures from './Fixtures';
import TeamSheet from './TeamSheet';
import Footer from "../../Common/Components/Footer";


export default function Routing() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={AboutPage} />
          <Route path="/lufcLive" component={LufcLive} />
          <Route path="/contact"  component={ContactPage}/>
          <Route path="/post/:id" component={Post} />
          <Route path="/news" component={News} />
          <Route path="/fixtures" component={Fixtures} />
          <Route path="/teamsheet" component={TeamSheet} />
        </Switch>
        <Footer />
      </div>
    </Router>
    
  );
}

