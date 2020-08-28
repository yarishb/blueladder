import React, {useState} from 'react';
import './App.scss';
//Components and pages
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar' 
import Projects from './pages/projects/Projects'

// React router
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from './pages/about/About';

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
        <Navbar windowScroll={scrolled}/>
          <Switch>
            <Route exact path={"/"} component={Home}/>
            <Route path={"/projects"} component={Projects}/>
            <Route path={"/about"} component={About}/>
          </Switch>
        </Router>
    </>
  );
}

export default App;


// Зробити:

// 2) Сторінку для відсилання запитів
// 3) Адмін панель з входом і юзерами які залишили запити