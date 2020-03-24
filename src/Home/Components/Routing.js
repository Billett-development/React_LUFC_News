import React from "react";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from "../../Common/Components/Navbar";

import Home from './Home';
import AboutPage from './About';
import ContactPage from './Contact';
import lufcLive from './Lufc_live';



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
        </Switch>
      </div>
    </Router>
    
  );
}

