import React from 'react'
import {NavBar} from './Components/NavBar';
import {Banner} from './Components/Banner';
import {Skills} from './Components/Skills';
import {Project} from './Components/Project';
import {Contactus} from './Components/Contactus';
import {Subscribe} from './Components/Subscribe';
import {Footer} from './Components/Footer';

import "./style.css";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Project/>
      <Contactus/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default App
