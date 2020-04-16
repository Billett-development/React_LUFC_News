import React from "react";
import Logo from "../../Images/Common/header-logo.png";

import { Link } from 'react-router-dom';

import { IoLogoFacebook } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoPinterest } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";


import '../Styles/_Navbar.scss';


const DEFAULT_CLASSNAME = "navigation";


export default class Navbar extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }
  resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop, 
    shrinkOn = 200,
      navEl = document.getElementById("shrink-head"),
      logoEl = document.getElementById("shrink-logo");
    if (distanceY > shrinkOn) {
      navEl.classList.add("shrink");
      logoEl.classList.add("shrink-logo");
    } else {
      navEl.classList.remove("shrink");
      logoEl.classList.remove("shrink-logo");
    }
  }

  render() {

    return (

    <div id="parent">

    <div columns={7} className={DEFAULT_CLASSNAME} id="shrink-head">
      <div className={`${DEFAULT_CLASSNAME}__list`}>
        <Link to="/news"><div className={`${DEFAULT_CLASSNAME}__item`}>NEWS</div></Link>

        <Link to="/about"><div className={`${DEFAULT_CLASSNAME}__item`}>ABOUT</div></Link>

        <Link to="/Lufc-Zone"><div className={`${DEFAULT_CLASSNAME}__item`}>LUFC ZONE</div></Link>

        <Link to="/"><div><img id="shrink-logo" alt="LUFC logo" src={Logo} className={`${DEFAULT_CLASSNAME}__item-logo`} /></div></Link>

        <Link to="/lufcLive"><div className={`${DEFAULT_CLASSNAME}__item`}>LUFC LIVE</div></Link>

        <div className={`${DEFAULT_CLASSNAME}__item`}>MERCH</div>

        <Link to="/contact"><div className={`${DEFAULT_CLASSNAME}__item`}>CONTACT</div></Link>
    
      </div>
    </div>

    <div className="navigation__mobile">
    
        <input type="checkbox" className="navigation__mobile-checkbox" id="navi-toggle" />
        <label for="navi-toggle" className="navigation__mobile-button">
            <span className="navigation__mobile-icon">&nbsp;</span>
        </label>
        <div className="navigation__mobile-background">&nbsp;</div>
        <nav className="navigation__mobile-nav">
              <ul className="navigation__mobile-list">
                  <Link to="/"><li className="navigation__mobile-item"><a href="#" className="navigation__mobile-link">home</a></li></Link>
                  <Link to="/post"><li className="navigation__mobile-item"><a href="#" className="navigation__mobile-link">news</a></li></Link>
                  <Link to="/about"><li className="navigation__mobile-item"><a href="#" className="navigation__mobile-link">about</a></li></Link>
                  <li className="navigation__mobile-item"><a href="#" className="navigation__mobile-link">lufc zone</a></li>
                  <Link to="/lufcLive"><li className="navigation__mobile-item"><a href="lufc-live.html" className="navigation__mobile-link">lufc live</a></li></Link>
                  <li className="navigation__mobile-item"><a href="#" className="navigation__mobile-link">merch</a></li>
                  <Link to="/contact"><li className="navigation__mobile-item"><a href="#" className="navigation__mobile-link">contact</a></li></Link>
              </ul>

              <div className="navigation__mobile-socials">
                  <a href=""><IoLogoFacebook className="ion-icon-nav" /></a>
                  <a href=""><IoLogoInstagram className="ion-icon-nav" /></a>
                  <a href=""><IoLogoTwitter className="ion-icon-nav" /></a>
                  <a href=""><IoLogoYoutube className="ion-icon-nav" /></a>
              </div>
        </nav>
      </div> 
    </div>
    );
  }


}

// export default function Navbar() {

  



//   return (

//     <div columns={7} className={DEFAULT_CLASSNAME}>
//       <div className={`${DEFAULT_CLASSNAME}__list`}>
//         <div className={`${DEFAULT_CLASSNAME}__item`}>NEWS</div>

//         <Link to="/about"><div className={`${DEFAULT_CLASSNAME}__item`}>ABOUT</div></Link>

//         <div className={`${DEFAULT_CLASSNAME}__item`}>LUFC ZONE</div>

//         <Link to="/"><div><img alt="LUFC logo" src={Logo} className={`${DEFAULT_CLASSNAME}__item-logo`} /></div></Link>

//         <Link to="/lufcLive"><div className={`${DEFAULT_CLASSNAME}__item`}>LUFC LIVE</div></Link>

//         <div className={`${DEFAULT_CLASSNAME}__item`}>MERCH</div>

//         <Link to="/contact"><div className={`${DEFAULT_CLASSNAME}__item`}>CONTACT</div></Link>
    
//       </div>
//     </div>
      
//   );
// }
