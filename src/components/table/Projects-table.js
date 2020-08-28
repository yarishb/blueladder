import React from 'react'
import '../../pages/projects/projects.scss'
import Tilt from 'react-tilt'

const Table = (props) => {
     return(
          <>
               <div style={{marginRight: "5.5rem"}}>
               <Tilt className="Tilt" options={{ max : 9 }} style={{ height: 350, width: 350 }} >
               <div className="projects-item">
                    <img src={props.img} className="project-img" alt="img"/>
               </div>                    
               </Tilt>
               </div>
          </>
     )
}

export default Table