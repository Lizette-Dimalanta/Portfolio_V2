import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {

  return (
    <>
      <div className='px-8 md:px-14 lg:px-30 pb-10 pt-7'>
        <Navbar />
        <Home />
      </div>
    </>
  )
}

export default App
