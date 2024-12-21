import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Features from './components/Features'
import Story from './components/Story'
import Contact from './components/Contact'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar/>
      <Hero/>
     <About/>
     <Features/>
     <Story/>
     <Contact/>
     <Footer/>
    </div>
    </div>
  )
}

export default App
