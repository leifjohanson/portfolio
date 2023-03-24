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
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/ios">iOS Projects</Link>
                    </li>
                    <li>
                        <Link to="/swe">SWE Projects</Link>
                    </li>
                </ul>
            </nav>
            <Link className='cta' to="/contact"><button>Contact</button></Link>
        </header>
    );
}

export default Navigation;