import React from "react";
import { Link } from 'react-router-dom';
import "./Contact.css";
import linkedInLogo from '../PhotoName/linkedInLogo.png';
import githubLogo from "../PhotoName/github-mark-white.png";
import appStoreLogo from "../PhotoName/App-Store-Logo.png"
import emailIcon from '../PhotoName/EmailIcon.png';

function Contact() {
    return (
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
    );
}

export default Contact;