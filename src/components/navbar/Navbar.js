import React from 'react'
import './navbar.scss'

function Navbar(props) {
     return (
          <div className={props.windowScroll? "nav-scrolled" : "navbar"}>
               <div className="navbar-items">
                    {props.windowScroll &&
                         <div className="logo"></div>
                    }
                    <div className="navbar-text">Home</div>
                    <div className="navbar-text">Our projects</div>
                    <div className="navbar-text">About us</div>
                    <div className="navbar-text">Location</div>
                    <div className="navbar-text">Contacts</div>
               </div>
          </div>
     )
}

export default Navbar