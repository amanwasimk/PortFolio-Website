import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Work from './Components/Work/Work'
import Connect from './Components/Connect/Connect'
export default function App(){

  return(
<div>
    <NavBar/>
    <Hero/>
    <About/>
    <Work/>
    <Connect/>
</div>
  )
}
