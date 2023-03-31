import React from 'react';
import './Navigation.css';
import logo from "./logo-light-mode.png";
import { scroller } from 'react-scroll';

function Navigation() {
    const scrollTo = (componentName) => {
        scroller.scrollTo(componentName, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
          offset: -98 // scrolls to element with an offset of -98px
        });
      }

    return (
        <header>
            <img className='logo' src={logo} alt="Leif Johanson"/>
            <nav>
                <ul className="navLinks">
                    <li>
                        <div onClick={() => scrollTo('photo-name')}>Home</div> 
                    </li>
                    <li>
                        <div onClick={() => scrollTo('my-skills')}>My Skills and Education</div>
                    </li>
                    <li>
                        <div onClick={() => scrollTo('my-projects')}>My Projects</div>
                    </li>
                </ul>
            </nav>
            <button onClick={() => scrollTo('contact-me')}>Contact</button>
        </header>
    );
}

export default Navigation;