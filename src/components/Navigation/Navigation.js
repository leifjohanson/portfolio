import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import logo from "./logo-light-mode.png";

function Navigation() {
    return (
        <header>
            <img className='logo' src={logo} alt="Leif Johanson"/>
            <nav>
                <ul className="navLinks">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/skills">My Skills and Education</Link>
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