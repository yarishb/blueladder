import React from 'react';
import '../../pages/projects/projects.scss';

import Tilt from 'react-tilt';
import { NavLink } from "react-router-dom";


const Table = (props) => {
     return(
          <>
          <NavLink to="/buy-info">
               <div style={{marginRight: "3rem"}}>
                    <Tilt className="Tilt" options={{ max : 9 }} style={{ height: window.innerWidth > 900? 350 : "17rem", width:  window.innerWidth > 900? 350 : "10rem" }} >
                         <div className="projects-item">
                              <img src={props.img} className="project-img" alt="img"/>
                         </div>                    
                    </Tilt>
               </div>
          </NavLink>
          </>
     )
}

export default Table