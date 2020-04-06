import React from "react";
import Logo from "../../Images/Common/header-logo.png";

import { Link } from 'react-router-dom';


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
        <div className={`${DEFAULT_CLASSNAME}__item`}>NEWS</div>

        <Link to="/about"><div className={`${DEFAULT_CLASSNAME}__item`}>ABOUT</div></Link>

        <div className={`${DEFAULT_CLASSNAME}__item`}>LUFC ZONE</div>

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
                  <li className="navigation__mobile-item"><a href="#" className="navigation__mobile-link">news</a></li>
                  <li className="navigation__mobile-item"><a href="#" className="navigation__mobile-link">about</a></li>
                  <li className="navigation__mobile-item"><a href="#" className="navigation__mobile-link">lufc zone</a></li>
                  <li className="navigation__mobile-item"><a href="lufc-live.html" className="navigation__mobile-link">lufc live</a></li>
                  <li className="navigation__mobile-item"><a href="#" className="navigation__mobile-link">merch</a></li>
                  <li className="navigation__mobile-item"><a href="#" className="navigation__mobile-link">contact</a></li>
              </ul>

              <div className="navigation__mobile-socials">
                  <ion-icon className="ion-icon" name="logo-facebook"></ion-icon>
                  <ion-icon className="ion-icon" name="logo-twitter"></ion-icon>
                  <ion-icon className="ion-icon" name="logo-instagram"></ion-icon>
                  <ion-icon className="ion-icon" name="logo-youtube"></ion-icon>
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
