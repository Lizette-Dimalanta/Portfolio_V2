import { lazy, Suspense, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import UseScrollToTop from './components/useScrollToTop'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Experience from './components/Experience'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

// const Home = lazy(() => import('./components/Home'))
// const About = lazy(() => import('./components/About'))
// const Experience = lazy(() => import('./components/Experience'))
// const Projects = lazy(() => import('./components/Projects'))
// const Contact = lazy(() => import('./components/Contact'))

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Experience />
    </>
    // <AnimatePresence>
    //   <div>
    //     <Router>
    //       <ScrollToTop />
    //       <Navbar />
    //       <Suspense fallback={''}>
    //         <Routes>
    //           <Route path='/' element={<Home />} />
    //           <Route path='about' element={<About />} />
    //           <Route path='experience' element={<Experience />} />
    //           <Route path='projects' element={<Projects />} />
    //           <Route path='contact' element={<Contact />} />
    //         </Routes>
    //       </Suspense>
    //     </Router>
    //     <UseScrollToTop />
    //   </div>
    // </AnimatePresence>
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

