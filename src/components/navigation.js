import React from 'react';
import {Link} from 'react-router-dom';

function Navigation (){
    return(
        <nav className="breadcrumb has-bullet-separator is-right is-large" aria-label="breadcrumbs">
            <ul>
                <li><Link to="/">About Me</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;