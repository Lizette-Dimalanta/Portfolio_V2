import React, { useState } from 'react'
import { CgMenuGridR } from 'react-icons/cg'
import { IoIosArrowUp } from 'react-icons/io'
import { IoPerson, IoHome } from 'react-icons/io5'
import { RiSuitcaseFill } from 'react-icons/ri'
import { FaCode } from 'react-icons/fa'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className='border-white border-x-[25px] border-t-[10px] border-b-8 shadow-sm sticky top-0 z-50 bg-white'>
      <div className='flex place-items-center justify-between'>
        <button>
          <h1 className='text-2xl md:text-3xl border-t-[4px] border-white font-bold italic bg-white'>
              LIZETTE
            <span className='not-italic pl-2'> 
              DIMALANTA
            </span>
          </h1>
        </button>
        <div className='font-Roboto-Mono text-sm hidden md:flex gap-7'>
          <a href='#about' 
            className='cursor-pointer flex items-center gap-1.5 hover:scale-110 transition-all ease-in-out duration-300 hover:animate-pulse'>
            <IoPerson size={15} /> 
            ABOUT
          </a>
          <a href='#experience' 
            className='cursor-pointer flex items-center gap-1.5 hover:scale-110 transition-all ease-in-out duration-300 hover:animate-pulse'>
            <RiSuitcaseFill size={16} /> 
            EXPERIENCE
          </a>
          <a href='#projects' 
            className='cursor-pointer flex items-center gap-1.5 hover:scale-110 transition-all ease-in-out duration-300 hover:animate-pulse'>
            <FaCode size={16} /> 
            PROJECTS
          </a>
        </div>
      </div>
      <div className='md:hidden'>
      {toggle ? (
          <IoIosArrowUp 
            size={20} 
            onClick={handleToggle} 
            className='text-lg cursor-pointer absolute top-4 right-4 hover:scale-125 transition-all ease-in-out duration-300' 
          />
      ) : (
        <CgMenuGridR 
          size={25} 
          onClick={handleToggle} 
          className='text-lg cursor-pointer absolute top-1 right-0 hover:scale-125 transition-all ease-in-out duration-300'/>
      )}
        {toggle && (
          <div className='fixed w-full h-screen top-[54px] left-0 backdrop-blur-lg flex flex-col items-end z-20 pt-4 pr-4'>
            <a href='#home' 
              onClick={handleToggle}
              className='text-white cursor-pointer bg-slate-800/40 rounded-sm px-2 flex items-center m-1.5 p-1.5 hover:scale-110 transition-all ease-in-out duration-300'>
                <span className='pr-3 font-Roboto-Mono font-semibold text-2xl'>
                  HOME
                </span>
                <IoHome size={20} />
            </a>
            <a href='#about' 
              onClick={handleToggle}
              className='text-white cursor-pointer bg-slate-800/40 rounded-sm px-2 flex items-center m-1.5 p-1.5 hover:scale-110 transition-all ease-in-out duration-300'>
                <span className='pr-3 font-Roboto-Mono font-semibold text-2xl'>
                  ABOUT
                </span>
                <IoPerson size={20} />
            </a>
            <a href='#experience' 
              onClick={handleToggle}
              className='text-white cursor-pointer bg-slate-800/40 rounded-sm px-2 flex items-center m-1.5 p-1.5 hover:scale-110 transition-all ease-in-out duration-300'>
                <span className='pr-3 font-Roboto-Mono font-semibold text-2xl'>
                  EXPERIENCE
                </span>
                <RiSuitcaseFill size={20} />
            </a>
            <a href='#projects' 
              onClick={handleToggle}
              className='text-white cursor-pointer bg-slate-800/40 rounded-sm px-2 flex items-center m-1.5 p-1.5 hover:scale-110 transition-all ease-in-out duration-300'>
                <span className='pr-3 font-Roboto-Mono font-semibold text-2xl'>
                  PROJECTS
                </span>
                <FaCode size={20} />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar