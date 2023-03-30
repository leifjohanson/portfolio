import React from 'react';
import { Link } from 'react-router-dom';
import './PhotoName.css';
import pfp from "./pfp.jpg"
import githubLogo from "./github-mark-white.png";
import linkedInLogo from "./linkedInLogo.png";
import appStoreLogo from "./App-Store-Logo.png"
import emailIcon from './EmailIcon.png';

function PhotoName() {
    return (
        <div className="photoName">
            <img className="pfp" src={pfp} alt="Me"/>
            <h1>Leif Johanson</h1>
            <h2><em>layf yo-han-son</em></h2>
            <ul className='socialLinks'>
                <li>
                    <a href='https://www.linkedin.com/in/leifjohanson/'>
                        <img className="socialLogo" src={linkedInLogo} alt="My LinkedIn"/>
                    </a>
                </li>
                <li>
                    <a href='https://github.com/leifjohanson'>
                        <img className="socialLogo" src={githubLogo} alt="My GitHub"/>
                    </a>
                </li>
                <li>
                    <a href='https://apps.apple.com/us/developer/leif-johanson/id1628448089'>
                        <img className="socialLogo" src={appStoreLogo} alt="My Apple Developer Profile"/>
                    </a>
                </li>
                <li>
                    <a href='mailto:leifbjohanson@gmail.com'>
                        <img className="socialLogo" src={emailIcon} alt="My Email (leifbjohanson@gmail.com)"/>
                    </a>
                </li>
            </ul>
            <p>
                Hello! My name is Leif Johanson and I am currently a senior at Western Washington University looking for software/iOS engineer positions upon completion of my B.S. in Computer Science in June 2023. I have been programming since 2018, with focuses on mobile and full stack development.
            </p>
        </div>
    );
}

export default PhotoName;