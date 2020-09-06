import React, {useEffect} from 'react'
import './home.scss'

import { NavLink } from "react-router-dom";
import Tilt from 'react-tilt'

//Images
import slider1 from '../../images/home/slider1.jpg'
import slider2 from '../../images/home/slider2.jpg'
import slider3 from '../../images/home/slider3.jpg'
import worker from '../../images/home/pngbarn.png'
import call from '../../images/home/call.png'
import mail from '../../images/contacts/mail.png'
import phone from '../../images/contacts/phone.png'
import telegram from '../../images/contacts/telegram.png'
import instagram from '../../images/contacts/instagram.png'

//Components
import Video from '../../components/video/Video'
import Location from '../../components/location/Location'

function Home() {

     useEffect(() => {
          window.scrollTo(0, 0)
     }, [])

     return (
          <>
             <div className="header">
                    <div className="image"></div>
                    <div className="header-text">
                         <div className="header-logo"><div className="header-blue-logo">BLUE</div>LADDER</div>
                         <div className="header-desc">We turn dreams into reality</div>
                    </div>
             </div>
             <div className="our-project">
               <div className="our-projects-text">
                    <div className="header-logo desc">Our projects</div>
                    <NavLink className="link" to="/projects"><div className="more projects">MORE</div></NavLink>
               </div>
               <div className="items-projects">
                    <div className="project">
                    <NavLink to="/projects" ><Tilt className="Tilt" options={{ max : 15 }} style={{ height: 350, width: 350 }} >
                         <div className="Tilt-inner"><img alt="img" className="slide-img slide-img-1"src={slider1}/></div>
                    </Tilt></NavLink></div>
                    <div className="second-img">
                    <div className="project">
                    <NavLink to="/projects" className="project"><Tilt className="Tilt" options={{ max : 15 }} style={{ height: 350, width: 350 }} >
                         <div className="Tilt-inner"><img alt="img" className="slide-img slide-img-2"src={slider2}/></div>
                    </Tilt></NavLink>
                    </div>
                    </div>
                    <div className="second-img">
                    <div className="project">
                    <NavLink to="/projects" className="project"><Tilt className="Tilt" options={{ max : 15 }} style={{ height: 350, width: 350 }} >
                         <div className="Tilt-inner"><img alt="img" className="slide-img slide-img-2"src={slider3}/></div>
                    </Tilt></NavLink>
                    </div>
                    </div>
               </div>
               <div className="projects-bg"></div>
             </div>
             <div className="about-us">
               <div className="our-projects-text">
                    <div className="header-logo desc">About us</div>
                    <NavLink className="link" to="/about"><div className="more projects">MORE</div></NavLink>
               </div>
               <img src={worker} className="worker" alt="img"/>
               <div className="about-text">
                    <div className="about-header">
                         We are creating houses for more than 15 years
                    </div>
                    <div className="about-desc">
                         Our company has realized the dreams of more than 12 thousand customers. We were founded in 2005 and are still one of the best companies on the market.
                    </div>
               </div>
               <div className="projects-bg bg-2"></div>
             </div>
               <div className="working-video">
                    <div className="video"><Video/></div>
                </div>
               <div className="location">
               <div className="our-projects-text">
                    <div className="header-logo desc">Location</div>
               </div>
                    <Location width={window.innerWidth}/>
               </div>
               <div className="contacts">
               <div className="our-projects-text">
                    <div className="header-logo desc">Contacts</div>
               </div>
               <div className="contacts-info">
                    <div className="contacts-row">
                         <img alt="img" className="contacts-info-img" src={phone}/>
                         <div className="contacts-info-text">8 800 555 3535</div>
                    </div>
                    <div className="contacts-row">
                         <img alt="img" className="contacts-info-img" src={mail}/>
                         <div className="contacts-info-text">yhbohdan@gmail.com</div>
                    </div>
                    <div className="contacts-row">
                         <img alt="img" className="contacts-info-img" src={telegram}/>
                         <div className="contacts-info-text"><a className="link" href="https://t.me/yarisheo">@yarisheo</a></div>
                    </div>
                    <div className="contacts-row">
                         <img alt="img" className="contacts-info-img" src={instagram}/>
                         <div className="contacts-info-text">_yarish</div>
                    </div>
               </div>
                    <img src={call} className="worker call" alt="img"/>
               <div className="projects-bg bg-4"></div>
               </div>
          </>
     )
}


export default Home