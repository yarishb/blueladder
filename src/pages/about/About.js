import React, {useEffect, useState} from 'react';
import './about.scss'
import { NavLink } from "react-router-dom";
import worker from '../../images/home/pngbarn.png'
import Location from '../../components/location/Location';

function About() {

     const[interior, setInterior] = useState(false)

     useEffect(() => {
          window.scrollTo(0, 0)
        }, [])

     return (
          <>
               <div className="header">
                    <div className="header-bg"></div>
                    <div className="header-text">About us</div>
               </div>
               <div className="why-us">Why us?</div>
               <div className="about-items">
                    <div className="about-item">
                         <div className="about-item-top">
                              <div className="about-item-circle">
                                   <img src="https://www.svgrepo.com/show/80463/fast-delivery.svg" alt="img" className="about-svg"/>
                              </div>
                         </div>
                         <div className="about-item-desc">
                              <div>Fast delivery</div>
                         </div>
                    </div>
                    <div className="about-item">
                         <div className="about-item-top">
                              <div className="about-item-circle">
                                   <img src="https://i7.uihere.com/icons/815/799/827/building-materials-4e21156c034604f98d4d56872283de99.png" alt="img" className="about-svg"/>
                              </div>
                         </div>
                         <div className="about-item-desc">
                              <div>Best materials</div>
                         </div>
                    </div>
                    <div className="about-item">
                         <div className="about-item-top">
                              <div className="about-item-circle">
                              <img src="https://www.svgrepo.com/show/146884/customer-reviews.svg" alt="img" className="about-svg"/>
                              </div>
                         </div>
                         <div className="about-item-desc">
                              <div>Good reviews</div>
                         </div>
                    </div>
                    <div className="about-item">
                         <div className="about-item-top">
                              <div className="about-item-circle">
                                   <img src="https://cdn.onlinewebfonts.com/svg/img_535590.png" alt="img" className="about-svg worker-svg"/>
                              </div>
                         </div>
                         <div className="about-item-desc">
                              <div>A Lot of workers</div>
                         </div>
                    </div>
               </div>
               <div className="about-projects">
                    <div className="header-bg projects-bg"></div>
                    <div className="about-text about-worker-text">
                         <div className="about-text-header">
                              We are
                         </div>
                         <div className="about-text-desc">
                              creating stunning interiors and exteriors designs for everybody
                              <NavLink className="link" to="/projects"><div className="button button-about">
                                   Our projects
                              </div></NavLink>
                         </div>
                    </div>
                    <div className="about-images">
                        {!interior ? <img className="about-img"alt="img" src="https://roohome.com/wp-content/uploads/2016/07/modern-house-interior-design-1280x720.jpg"/> :
                         <img  className="about-img"alt="img" src="https://www.thespruce.com/thmb/6BsabfIoBN1bb3HNtigfkARNGhA=/1212x867/filters:fill(auto,1)/exterior_house-56a193115f9b58b7d0c0c3e4.jpg"/>}
                    </div>
                    <div className="about-subimages">
                         <img alt="img" onClick={() => setInterior(false)}  style={{opacity: interior && "0.7", boxShadow: !interior && "0 0 20px rgba(0,0,0,0.5)"}} className="about-subimg" src="https://roohome.com/wp-content/uploads/2016/07/modern-house-interior-design-1280x720.jpg"/> :
                         <img alt="img" onClick={() => setInterior(true)} style={{opacity: !interior && "0.7", boxShadow: interior && "0 0 20px rgba(0,0,0,0.5)"}} className="about-subimg" src="https://www.thespruce.com/thmb/6BsabfIoBN1bb3HNtigfkARNGhA=/1212x867/filters:fill(auto,1)/exterior_house-56a193115f9b58b7d0c0c3e4.jpg"/>
                    </div>
               </div>
               <div className="worker-about">
                    <div className="header-bg-worker"></div>
                    <div className="worker-about-text">
                         <div className="about-worker-text-header">
                              We are
                         </div>
                         <div className="about-worker-text-desc">
                         building quality projects that meet the functional needs of our clients while doing so in the most budget-conscious, safe, and timely manner possible.
                              <NavLink className="link" to="/projects"><div className="button button-about">
                                   Our projects
                              </div></NavLink>
                         </div>
                    </div>
                    <img src={worker} className="worker-about-img" alt="img"/>
               </div>
               <div className="location-about">
                    <Location />
               </div>
          </>
     )
}

export default About