import React, { useState } from 'react';
import axios from "axios";
import { IoIosCall, IoIosPin, IoMdMail  } from "react-icons/io";

import Recaptcha from 'react-recaptcha';

import SimpleMap from './Maps';

import '../Styles/_Contact.scss';

const DEFAULT_CLASSNAME = "contact";

export default function Contact(data) {


    // CODE FOR THE ACF DATA
    const ContactInfo = data.contactInfo;


    // CONTACT THIRDPARTY CODE 
            const [serverState, setServerState] = useState({
                submitting: false,
                status: null
            });
            const handleServerResponse = (ok, msg, form) => {
                setServerState({
                submitting: false,
                status: { ok, msg }
                });
                if (ok) {
                form.reset();
                }
            };
            const handleOnSubmit = e => {
                e.preventDefault();
                const form = e.target;
                setServerState({ submitting: true });
                axios({
                method: "post",
                url: "https://formspree.io/mvobdenk",
                data: new FormData(form)
                })
                .then(r => {
                    handleServerResponse(true, "Thanks!", form);
                })
                .catch(r => {
                    handleServerResponse(false, r.response.data.error, form);
                });
      };
    return(
        <div className="section-contact">
                <div className={DEFAULT_CLASSNAME}>
                    <div className="container">
                    <div className={`${DEFAULT_CLASSNAME}__details`}>
                        <div className={`${DEFAULT_CLASSNAME}__details-phone`}>
                            <IoIosCall className="ion-icon" />
                            <h5>Phone</h5>
                            <p>{ContactInfo !== undefined ? ContactInfo.contact_number : ""}</p>
                        </div>
                        <div className={`${DEFAULT_CLASSNAME}__details-post`}>
                            <IoIosPin className="ion-icon" />
                            <h5>Post</h5>
                            <p>{ContactInfo !== undefined ? ContactInfo.post_address : ""}</p> <br />
                            <p>{ContactInfo !== undefined ? ContactInfo.post_address_2 : ""}</p>
                            
                        </div>
                        <div className={`${DEFAULT_CLASSNAME}__details-email`}>
                            <IoMdMail className="ion-icon" />
                            <h5>Email</h5>
                            <p>{ContactInfo !== undefined ? ContactInfo.email_address : ""}</p>
                        </div>
                    </div>


                    <div className={`${DEFAULT_CLASSNAME}__heading`}>
                        <h3>Leave us a message</h3>
                        <p>Use the form below to send us an email</p>
                    </div>

                    <form onSubmit={handleOnSubmit} className={`${DEFAULT_CLASSNAME}__form`}>

                        <div className="contact__name">
                            <div className="contact__name-label">
                                <label for="full-name">name</label>
                            </div>
                            <div className="contact__name-full">
                                <input name="full-name" type="text" className="contact__name-full-input" required />
                            </div>
                        </div>
    
                        <div class="contact__email">
                            <div class="contact__email-label">
                                <label for="email">email</label>
                            </div>
                            <div class="contact__email-input">
                                <input name="email" type="email" required class="contact__email-input-email" />
                            </div>
                        </div>

                        <div class="contact__subject">
                            <div class="contact__subject-label">
                                <label for="subject">subject</label>
                            </div>
                            <div class="contact__subject-input">
                                <input name="subject" type="text" required class="contact__subject-input-subject" />
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
                                <button onClick={this.handleSubscribe} disabled={serverState.submitting} class="btn-blue">Submit</button>
                            </div>
                                    {serverState.status && (
                                        <p className={!serverState.status.ok ? "errorMsg" : ""}>
                                        {serverState.status.msg}
                                        </p>
                                    )}
                        </div>
                    </form>
                </div>

                    <div className={`${DEFAULT_CLASSNAME}__map`} id="map">
                        <SimpleMap />
                    </div>
                </div>
            
        </div>
    );
}