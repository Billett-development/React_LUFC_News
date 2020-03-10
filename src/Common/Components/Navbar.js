import React from "react";
import Logo from "../../Images/Common/header-logo.png";

import { Link } from 'react-router-dom';


import '../Styles/_Navbar.scss';

import Home from '../../Home/Components/Home';
import About from '../../Home/Components/About';
import Contact from '../../Home/Components/Contact';
import Lufc_Live from '../../Home/Components/Lufc_live';


const DEFAULT_CLASSNAME = "navigation";

export default function Navbar() {
  return (

    <div columns={7} className={DEFAULT_CLASSNAME}>
      <div className={`${DEFAULT_CLASSNAME}__list`}>
        <div className={`${DEFAULT_CLASSNAME}__item`}>NEWS</div>

        <Link to="/about"><div className={`${DEFAULT_CLASSNAME}__item`}>ABOUT</div></Link>

        <div className={`${DEFAULT_CLASSNAME}__item`}>LUFC ZONE</div>

        <Link to="/"><div><img alt="LUFC logo" src={Logo} className={`${DEFAULT_CLASSNAME}__item-logo`} /></div></Link>

        <Link to="/lufcLive"><div className={`${DEFAULT_CLASSNAME}__item`}>LUFC LIVE</div></Link>

        <div className={`${DEFAULT_CLASSNAME}__item`}>MERCH</div>

        <Link to="/contact"><div className={`${DEFAULT_CLASSNAME}__item`}>CONTACT</div></Link>
    
      </div>
    </div>
      
  );
}
