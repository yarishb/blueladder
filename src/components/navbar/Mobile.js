import React from 'react';
import { NavLink } from "react-router-dom";
import './mobile.scss'

function Mobile() {
    return (
        <div className="mobile-nav">
            <NavLink className="link" to="/"><div className="nav-item">Home</div></NavLink>
            <NavLink className="link" to="/projects"><div className="nav-item">Our projects</div></NavLink>
            <NavLink className="link" to="/about"><div className="nav-item">About us</div></NavLink>
        </div>
    );
}

export default Mobile;