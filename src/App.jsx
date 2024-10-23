import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Description from './components/description/description';
import Project from './components/project/project';
function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <Description/>
      <Project/>
      
    </>

  )
}

export default App
