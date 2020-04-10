import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import { IoLogoFacebook } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoPinterest } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";

import '../Styles/_Footer.scss';

const DEFAULT_CLASSNAME = "footer";

export default function Footer() {

    const [homeData, setHomeData] = useState([]);
    const dataIsLoaded = homeData.acf !== undefined ? true : false;
    const FooterResult = homeData.acf;

    useEffect(() => {
  
        function getData() {
    
          fetch("http://localhost/LUFC_news/wp-json/acf/v3/pages/24?_embed")
                .then(response => response.json())
                .then(homeData => setHomeData(homeData));
        }
          getData();
          console.log(homeData.acf);
  
      }, [dataIsLoaded]);


    return(
        <div className="section-footer">
            <div className="container">
            <div className={DEFAULT_CLASSNAME}>

            <div className={`${DEFAULT_CLASSNAME}__contact`}>
                    <h5>{FooterResult !== undefined ? FooterResult.contact_title : ""}</h5>
                    <div className={`${DEFAULT_CLASSNAME}__contact-address`}>
                        <p>{FooterResult !== undefined ? FooterResult.contact_address : ""}</p>  
                    </div>
                    <div className={`${DEFAULT_CLASSNAME}__contact-email`}>
                            <a href="mailto:info@lufcnews.co.uk">{FooterResult !== undefined ? FooterResult.contact_email_address : ""}</a> 
                    </div>
                    <div className={`${DEFAULT_CLASSNAME}__contact-links`}>
                        <a href={FooterResult !== undefined ? FooterResult.facebook_icon_link : ""}><IoLogoFacebook className="ion-icon-footer" /></a>
                        <a href={FooterResult !== undefined ? FooterResult.twitter_icon_link : ""}><IoLogoTwitter className="ion-icon-footer" /></a>
                        <a href={FooterResult !== undefined ? FooterResult.pinterest_icon_link : ""}><IoLogoPinterest className="ion-icon-footer" /></a>
                        <a href={FooterResult !== undefined ? FooterResult.instagram_icon_link : ""}><IoLogoInstagram className="ion-icon-footer" /></a>
                        <a href={FooterResult !== undefined ? FooterResult.youtube_icon_link : ""}><IoLogoYoutube className="ion-icon-footer" /></a>
                    </div>
            </div>

            <div className={`${DEFAULT_CLASSNAME}__hours`}>
                <h5>Working hours</h5>
                    <ul>
                        <li>{FooterResult !== undefined ? FooterResult.monday : ""}</li>
                        <li>{FooterResult !== undefined ? FooterResult.tuesday : ""}</li>
                        <li>{FooterResult !== undefined ? FooterResult.wednesday : ""}</li>
                        <li>{FooterResult !== undefined ? FooterResult.thursday : ""}</li>
                        <li>{FooterResult !== undefined ? FooterResult.friday : ""}</li>
                        <li>{FooterResult !== undefined ? FooterResult.saturday : ""}</li>
                        <li>{FooterResult !== undefined ? FooterResult.sunday : ""}</li>
                    </ul>
            </div> 


            <div className={`${DEFAULT_CLASSNAME}__information`}>
                <h5>Information</h5>
                    <ul>
                        <li><a href="">Terms &amp; Conditions</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="https://lufcnews-shop.co.uk/">LUFC News Shop</a></li>
                        <li><a href="">LUFC Zone</a></li>
                        <Link to="/lufcLive"><li><a href="">LUFC live</a></li></Link>
                        <Link to="/contact"><li><a href="">Contact</a></li></Link>
                    </ul>
            </div>

            <div className={`${DEFAULT_CLASSNAME}__newsletter`}>
                <h5>Newsletter</h5>
                <p>{FooterResult !== undefined ? FooterResult.newsletter_info : ""}</p>

                <div className={`${DEFAULT_CLASSNAME}__newsletter-subscribe`}>
                    <input type="email" className="footer_email-btn" placeholder="Enter your email" />
                    <button>Sign up</button>
                </div>

            </div>
        </div>
        <div className={`${DEFAULT_CLASSNAME}__copyright`}>
            {FooterResult !== undefined ? FooterResult.footer_info_block : ""}
        </div>
    </div>
    </div>
    
    );
        }