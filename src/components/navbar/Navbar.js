import React from 'react'
import './navbar.scss'
import { NavLink } from "react-router-dom";

function Navbar(props) {
     return (
          <div className={props.windowScroll? "nav-scrolled" : "navbar"}>
               <div className="navbar-items">
                    {props.windowScroll &&
                         <NavLink className="link" to="/"><div className="logo"></div></NavLink>
                    }
                    <NavLink className="link" to="/"><div className="navbar-text">Home</div></NavLink>
                    <NavLink className="link" to="/projects"><div className="navbar-text">Our projects</div></NavLink>
                    <NavLink className="link" to="/about"><div className="navbar-text">About us</div></NavLink>
               </div>
          </div>
     )
}

export default Navbar