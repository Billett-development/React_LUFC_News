import React from "react";
import Logo from "../../Images/Common/header-logo.png";
import { Link } from 'react-router-dom';
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoYoutube } from "react-icons/io";

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
      logoEl = document.getElementById("shrink-logo"),

            navNews = document.getElementById("shrink-news"),
            navAbout = document.getElementById("shrink-about"),
            navZone = document.getElementById("shrink-zone"),
            navLive = document.getElementById("shrink-live"),
            navMerch = document.getElementById("shrink-merch"),
            navContact = document.getElementById("shrink-contact"),
            dropDwn = document.getElementById("shrink-btn");

            

    if (distanceY > shrinkOn) {
      navEl.classList.add("shrink");
      logoEl.classList.add("shrink-logo");

            navNews.classList.add("shrink-item");
            navAbout.classList.add("shrink-item");
            navZone.classList.add("shrink-item");
            navLive.classList.add("shrink-item");
            navMerch.classList.add("shrink-item");
            navContact.classList.add("shrink-item");
            dropDwn.classList.add("shrink-btn");

    } else {
      navEl.classList.remove("shrink");
      logoEl.classList.remove("shrink-logo");

            navNews.classList.remove("shrink-item");
            navAbout.classList.remove("shrink-item");
            navZone.classList.remove("shrink-item");
            navLive.classList.remove("shrink-item");
            navMerch.classList.remove("shrink-item");
            navContact.classList.remove("shrink-item");
            dropDwn.classList.remove("shrink-btn");
    }
  }

  render() {

    return (

    <div id="parent">

    <div columns={7} className={DEFAULT_CLASSNAME} id="shrink-head">
      <div className={`${DEFAULT_CLASSNAME}__list`}>
        <Link to="/news"><div className={`${DEFAULT_CLASSNAME}__item`} id="shrink-news">NEWS</div></Link>

        <Link to="/about"><div className={`${DEFAULT_CLASSNAME}__item`} id="shrink-about">ABOUT</div></Link>

        <div className={`${DEFAULT_CLASSNAME}__item dropdown`} id="shrink-zone">
          <div className="dropdown__btn">LUFC ZONE</div>
          <div className="dropdown__content" id="shrink-btn">
            <Link to="/fixtures"><div>Fixtures & Results</div></Link>
            <Link to="/teamsheet"><div>Teamsheet</div></Link>
            <Link to="/fixtures"><div>About LUFC</div></Link>
        </div>
        
        </div>

        <Link to="/"><div><img id="shrink-logo" alt="LUFC logo" src={Logo} className={`${DEFAULT_CLASSNAME}__item-logo`} /></div></Link>

        <Link to="/lufcLive"><div className={`${DEFAULT_CLASSNAME}__item`} id="shrink-live">LUFC LIVE</div></Link>

        <div className={`${DEFAULT_CLASSNAME}__item`} id="shrink-merch"><a href="https://lufcnews-shop.co.uk/" >MERCH</a></div>

        <Link to="/contact"><div className={`${DEFAULT_CLASSNAME}__item`} id="shrink-contact">CONTACT</div></Link>
    
      </div>
    </div>

    <div className="navigation__mobile">
    
        <input type="checkbox" className="navigation__mobile-checkbox" id="navi-toggle" />
        <label htmlFor="navi-toggle" className="navigation__mobile-button">
            <span className="navigation__mobile-icon">&nbsp;</span>
        </label>
        <div className="navigation__mobile-background">&nbsp;</div>
        <nav className="navigation__mobile-nav">
              <ul className="navigation__mobile-list">
                  <Link to="/"><li className="navigation__mobile-item">home</li></Link>
                  <Link to="/post"><li className="navigation__mobile-item">news</li></Link>
                  <Link to="/about"><li className="navigation__mobile-item">about</li></Link>
                  <li className="navigation__mobile-item">lufc zone</li>
                  <Link to="/lufcLive"><li className="navigation__mobile-item">lufc live</li></Link>
                  <li className="navigation__mobile-item">merch</li>
                  <Link to="/contact"><li className="navigation__mobile-item">contact</li></Link>
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
