import React, {useState} from 'react';
import './App.scss';
//Components and pages
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar' 
import Projects from './pages/projects/Projects'

// React router
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from './pages/about/About';
import Buy from './pages/buy/Buy';
import AdminLog from './pages/admin/Admin-log';
import Api from './pages/api/Api'
import Mobile from './components/navbar/Mobile';

function App() {

  const [scrolled, setScrolled] = useState(false)

  window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100
      if(isTop === true){
          setScrolled( false )
      }else{
          setScrolled( true )
      }
  })

 
  return (
    <>
      <Router>
        {
          window.innerWidth > 900?
           <Navbar windowScroll={scrolled} />
          :
          <Mobile/>            
        }
          <Switch>
            <Route exact path={"/"} component={Home}/>
            <Route path={"/projects"} component={Projects}/>
            <Route path={"/about"} component={About}/>
            <Route path={"/buy-info"} component={Buy}/>
            <Route path={'/admin'} component={AdminLog}/>
            <Route path={'/api'} component={Api}/>
          </Switch>
        </Router>
    </>
  );
}

export default App;


// Зробити:

// 2) Сторінку для відсилання запитів
// 3) Адмін панель з входом і юзерами які залишили запити