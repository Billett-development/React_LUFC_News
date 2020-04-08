import React from "react";
import { Link } from 'react-router-dom';

import { IoLogoFacebook } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoPinterest } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";

import '../Styles/_Footer.scss';

const DEFAULT_CLASSNAME = "footer";

export default function Footer() {
    return(
        <div className="section-footer">
            <div className="container">
            <div className={DEFAULT_CLASSNAME}>

            <div className={`${DEFAULT_CLASSNAME}__contact`}>
                   <h5>Get in touch</h5>
                <div className={`${DEFAULT_CLASSNAME}__contact-address`}>
                    <p>15 Woodsdale Court, Dominion Road, Worthing,West Sussex, BN14 8JQ</p>  
                </div>
                <div className={`${DEFAULT_CLASSNAME}__contact-email`}>
                        <a href="#">info@lufcnews.co.uk</a> 

                </div>
                <div className={`${DEFAULT_CLASSNAME}__contact-links`}>
                    <IoLogoFacebook className="ion-icon-footer" />
                    <IoLogoTwitter className="ion-icon-footer" />
                    <IoLogoPinterest className="ion-icon-footer" />
                    <IoLogoInstagram className="ion-icon-footer" />
                    <IoLogoYoutube className="ion-icon-footer" />
                </div>
            </div>
                <div className={`${DEFAULT_CLASSNAME}__hours`}>
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

                <div className={`${DEFAULT_CLASSNAME}__information`}>
                    <h5>Information</h5>
                    <ul>
                        <li><a href="">Terms &amp; Conditions</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">LUFC News Shop</a></li>
                        <li><a href="">LUFC Zone</a></li>
                        <Link to="/lufcLive"><li><a href="">LUFC live</a></li></Link>
                        <Link to="/contact"><li><a href="">Contact</a></li></Link>
                    </ul>
                </div>

                <div className={`${DEFAULT_CLASSNAME}__newsletter`}>
                    <h5>Newsletter</h5>
                    <p>Subscribe to our newsletter and get 10% off your first purchase</p>

                    <div className={`${DEFAULT_CLASSNAME}__newsletter-subscribe`}>
                        <input type="email" className="footer_email-btn" placeholder="Enter your email" />
                        <button>Sign up</button>
                    </div>

                </div>


        </div>

        <div className={`${DEFAULT_CLASSNAME}__copyright`}>
            &copy; Copyright 2020 Lufcnews.co.uk is a partner of Football News UK LTD which is a 
                limited company registered in England and Wales with a registered office at 15 Woodsdale Court, 
                Dominion Road, Worthing, West Sussex, BN14 8JQ, registered number: 12060029. All Rights Reserved.
        </div>
    </div>
    </div>

    );
}