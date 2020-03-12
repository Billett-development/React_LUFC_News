import React from 'react';

import SimpleMap from './Maps';

import '../Styles/_Contact.scss';

const DEFAULT_CLASSNAME = "hero";

export default function Contact() {

    return(
        <div className="section-contact">
                <div className="contact">
                    <div className="container">
                    <div className="contact__details">
                        <div className="contact__details-phone">
                            
                            <h5>Phone</h5>
                            <p>+44 7712294836</p>
                        </div>
                        <div className="contact__details-post">
                            
                            <h5>Post</h5>
                            <p>30 Jubille Road</p> <br />
                            <p>Bath, BA2 8FB</p> <br />
                        </div>
                        <div className="contact__details-email">
                            
                            <h5>Email</h5>
                            <p>kaylembillett@hotmail.co.uk</p>
                        </div>
                    </div>


                    <div className="contact__heading">
                        <h3>Leave us a message</h3>
                        <p>Use the form below to send us an email</p>
                    </div>

                    <form action="#" className="contact__form">

                        <div className="contact__name">
                            <div className="contact__name-label">
                                <label for="full-name">name</label>
                            </div>
                            <div className="contact__name-full">
                                <input name="full-name" type="text" value="" className="contact__name-full-input" required />
                            </div>
                        </div>
    
                        <div class="contact__email">
                            <div class="contact__email-label">
                                <label for="email">email</label>
                            </div>
                            <div class="contact__email-input">
                                <input name="email" type="email" value="" required class="contact__email-input-email" />
                            </div>
                        </div>

                        <div class="contact__subject">
                            <div class="contact__subject-label">
                                <label for="subject">subject</label>
                            </div>
                            <div class="contact__subject-input">
                                <input name="subject" type="text" value="" required class="contact__subject-input-subject" />
                            </div>
                        </div>
    
    
                        <div class="contact__message">
                            <div class="contact__message-label">
                                <label for="message">Message</label>
                            </div>
                            <div class="contact__message-input">
                                <textarea name="message" id="" cols="30" rows="10" required></textarea>
                            </div>
                        </div>
    
                        <div class="contact__submit">
                            <div class="contact__submit-btn">
                                <button class="btn-blue">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>

                    <div class="contact__map" id="map">
                        <SimpleMap />
                    </div>
                </div>
            
        </div>
    );
}