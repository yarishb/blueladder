import React, {useState, useEffect} from 'react'
import './projects.scss'


import {exteriors, interiors} from '../../components/table/projects-utils'
import Table from '../../components/table/Projects-table'

import headerImg from '../../images/home/projects.jpg'
import headerExteriorImg from '../../images/home/headerExteriorImg.jpg'


function projectsTable(project){
     return (
          <Table 
               key={project.id}
               img={project.image}
               text={project.text}
          />
     )
}


function Projects() {

     useEffect(() => {
          window.scrollTo(0, 0)
     }, [])

     const[choice, setChoice] = useState(false)

     return (
          <>
               <div className="top">
                    <img className="headerBg" src={!choice? headerImg : headerExteriorImg} alt="img"/>
                    <div className="headerText">
                         <div className="header">Our projects</div>
                         <div className="under-header">interiors / exteriors</div>
                         <div className="description">We have created more than a thousand houses and interior designs. Our company has more than 12 thousand workers and is located in 14 cities. You can use our services in Germany, Czech Republic, Denmark, Sweden, Switzerland, South Africa, Ukraine, as well as in other European countries. </div>
                         <div className="button">Get product</div>
                    </div>
               </div>
               <div className="projectsAll">
                    <div className="projectButtons">
                         <div className="button" style={{backgroundColor: !choice &&  "#fff", border: "2px solid #024575"}} onClick={() => setChoice(false)}>INTERIORS</div>
                         <div className="between">/</div>
                         <div className="button" style={{backgroundColor: choice &&  "#fff", border: "2px solid #024575"}} onClick={() => setChoice(true)}>EXTERIORS</div>
                    </div>
                    <div className="project">
                         {choice? exteriors.map(projectsTable) : interiors.map(projectsTable)}
                    </div>
               </div>
          </>
     )
};

export default Projects