import React, { useState } from 'react'
import { CgMenuGridR } from "react-icons/cg";
import { IoIosArrowUp } from "react-icons/io";
import MenuOverlay from './MenuOverlay';

const Navbar = () => {

  const [toggle, setToggle] = useState(false)
  const menu = [
    {
        id:1,
        title:'HOME'
    },
    {
        id:2,
        title:'ABOUT'
    },
    {
        id:3,
        title:'EXPERIENCE'
    },
    {
        id:4,
        title:'EDUCATION'
    },
    {
        id:5,
        title:'PROJECTS'
    }
]

  return (
    <div className='flex place-items-center justify-between px-4 pt-3 pb-2'>
        <button>
          <h1 className='text-3xl font-bold italic bg-white hover:scale-105 transition-all ease-in-out duration-300'>LIZETTE
            <span className='not-italic'> DIMALALNTA</span>
          </h1>
        </button>
      
      <div className='hidden md:flex gap-4'>
        {menu.map((item) => (
          <div key={item.id}>
            <h2 className='font-Roboto-Mono text-base cursor-pointer hover:scale-110 transition-all ease-in-out duration-300 hover:animate-pulse'>{item.title}</h2>
          </div>
        ))}
      </div>

      <div className='md:hidden'>
        {! toggle ? <CgMenuGridR onClick={() => setToggle(!toggle)} className='text-lg cursor-pointer hover:scale-125 transition-all ease-in-out duration-300'/>
        : <IoIosArrowUp onClick={() => setToggle(!toggle)} className='text-lg cursor-pointer'/> }
        {toggle ? <MenuOverlay menu = {menu} /> : null}
      </div>
    </div>
  )
}

export default Navbar

// 'shadow-md w-full fixed top-10 left-0'