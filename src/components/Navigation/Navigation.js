import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import logo from "./logo-light-mode.png";

function Navigation() {
    function goToTop() {
        const anchor = document.querySelector('#photoName');
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function goToSkills() {
        const anchor = document.querySelector('#languageList');
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return (
        <header>
            <img className='logo' src={logo} alt="Leif Johanson"/>
            <nav>
                <ul className="navLinks">
                    <li>
                        <Link to="/" onClick={goToTop}>Home</Link>
                    </li>
                    <li>
                        <Link to="/skills" onClick={goToSkills}>My Skills and Education</Link>
                    </li>
                    <li>
                        <Link to="/projects">My Projects</Link>
                    </li>
                </ul>
            </nav>
            <Link className='cta' to="/contact"><button>Contact</button></Link>
        </header>
    );
}

export default Navigation;