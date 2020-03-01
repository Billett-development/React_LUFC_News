import React from "react";
import Logo from "../../Images/Common/lufc-logo-lg.png";

import '../Styles/_Footer.scss';

const DEFAULT_CLASSNAME = "hero";

export default function Footer() {
    return(
        <div className="section-footer">
            <div className="container">
            <div className="footer">

            <div className="footer__contact">
                   <h5>Get in touch</h5> 

                <div className="footer__contact-address">

                    <p>15 Woodsdale Court, Dominion Road, Worthing,West Sussex, BN14 8JQ</p>  
                    
                </div>

                <div className="footer__contact-email">
                        <a href="#">info@lufcnews.co.uk</a> 

                </div>

                <div className="footer__contact-links">
                    <ion-icon className="ion-icon" name="logo-facebook"></ion-icon>
                    <ion-icon className="ion-icon" name="logo-twitter"></ion-icon>
                    <ion-icon className="ion-icon" name="logo-pinterest"></ion-icon>
                    <ion-icon className="ion-icon" name="logo-instagram"></ion-icon>
                    <ion-icon className="ion-icon" name="logo-youtube"></ion-icon>
                </div>
            </div>


                <div className="footer__hours">
                    <h5>Working hours</h5>

                    <ul>
                        <li>Monday    - 9:30am–5pm</li>
                        <li>Wednesday - 9:30am–5pm</li>
                        <li>Thursday  - 9:30am–5pm</li>
                        <li>Friday    - 9:30am–5pm</li>
                        <li>Saturday  - 9:30am–5pm</li>
                        <li>Sunday    - 10am–4pm</li>
                    </ul>
                </div> 

                <div className="footer__information">
                    <h5>Information</h5>
                    <ul>
                        <li><a href="">Terms &amp; Conditions</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">LUFC News Shop</a></li>
                        <li><a href="">LUFC Zone</a></li>
                        <li><a href="">LUFC live</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>


                <div className="footer__newsletter">
                    <h5>Newsletter</h5>
                    <p>Subscribe to our newsletter and get 10% off your first purchase</p>

                    <div className="footer__newsletter-subscribe">
                        <input type="email" className="footer_email-btn" placeholder="Enter your email" />
                        <button>Sign up</button>
                    </div>

                </div>


        </div>

        <div className="footer__copyright">
            &copy; Copyright 2020 Lufcnews.co.uk is a partner of Football News UK LTD which is a 
                limited company registered in England and Wales with a registered office at 15 Woodsdale Court, 
                Dominion Road, Worthing, West Sussex, BN14 8JQ, registered number: 12060029. All Rights Reserved.
        </div>
    </div>
    </div>

    );
}