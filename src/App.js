import React, {useState} from 'react';
import './App.scss';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar' 

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
      <div className="home">
        <Navbar windowScroll={scrolled}/>
        <Home />
      </div>
    </>
  );
}

export default App;
