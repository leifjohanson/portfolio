import React from "react";
import "./Contact.css";
import { Element } from 'react-scroll'

function Contact() {
    return (
        <Element name='contact-me'>
            <div className="contact">
                <h1 className="sectionTitle">Contact Me</h1>
                <div className='contactCardWrapper'>
                    <div className='contactCard'>
                        <p className="contactCardTitle">
                            LinkedIn
                        </p>
                        <p className="contactCardSubtitle">
                            <a href="https://www.linkedin.com/in/leifjohanson/">/in/leifjohanson</a>
                        </p>
                    </div>
                    <div className='contactCard'>
                        <p className="contactCardTitle">
                            GitHub
                        </p>
                        <p className="contactCardSubtitle">
                            <a href="https://github.com/leifjohanson">/leifjohanson</a>
                        </p>
                    </div>
                    <div className='contactCard'>
                        <p className="contactCardTitle">
                            Email
                        </p>
                        <p className="contactCardSubtitle">
                            <a href="mailto:leifbjohanson@gmail.com">leifbjohanson@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </Element>
    );
}

export default Contact;