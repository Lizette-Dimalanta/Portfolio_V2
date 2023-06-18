import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Experience from './pages/Experience'
import About from './pages/About'
import Quote from './components/Quote'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './pages/Footer'

function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <Quote />
      <div className='relative'>
        <div className='fixed inset-0 bg-cover bg-center z-[-1]' 
             style={{ backgroundImage: `url(${'/images/WhiteBackground.jpg'})` }}
        />
        <div className='z-10'>
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App


// import { useState } from 'react'
// import './App.css'
// import Navbar from './components/Navbar'
// import Home from './components/Home'
// import { motion } from "framer-motion"

// function App() {

//   return (
//     <>
//       <div className=''>
//         <Navbar />
//         <Home />
//       </div>
//     </>
//   )
// }

// export default App

