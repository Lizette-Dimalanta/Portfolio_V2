import React, { useState } from 'react'
import { CgMenuGridR } from "react-icons/cg"
import { IoIosArrowUp } from "react-icons/io"
import { IoPerson, IoHome } from "react-icons/io5"
import { RiSuitcaseFill, RiContactsBook2Fill } from "react-icons/ri"
import { FaCode } from "react-icons/fa"
import MenuOverlay from './MenuOverlay'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className='border-white border-x-[20px] border-t-[10px] border-b-8 shadow-lg'>
      <div className='flex place-items-center justify-between'>
        <button>
          <h1 className='text-2xl font-bold italic bg-white hover:scale-105 transition-all ease-in-out duration-300'>LIZETTE
            <span className='not-italic'> DIMALALNTA</span>
          </h1>
        </button>
      </div>
      <div className='md:hidden'>
      {toggle ? (
          <IoIosArrowUp onClick={handleToggle} className='text-lg cursor-pointer absolute top-4 right-4 hover:scale-125 transition-all ease-in-out duration-300' />
      ) : (
        <CgMenuGridR onClick={handleToggle} className='text-lg cursor-pointer absolute top-4 right-4 hover:scale-125 transition-all ease-in-out duration-300'/>
      )}
        {toggle && (
          <div className='fixed w-full h-screen top-12 left-0 backdrop-blur-lg flex flex-col justify-center items-center z-20'>
            <a href='#main' className='font-Roboto-Mono text-base w-[75%] flex justify-center items-center rounded-full shadow-lg bg-white m-2 p-2 cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'>
              <IoHome size={20} />
              <span className='pl-3'>HOME</span>
            </a>
            <a href='#main' className='font-Roboto-Mono text-base w-[75%] flex justify-center items-center rounded-full shadow-lg bg-white m-2 p-2 cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'>
              <IoPerson size={20} />
              <span className='pl-3'>ABOUT</span>
            </a>
            <a href='#main' className='font-Roboto-Mono text-base w-[75%] flex justify-center items-center rounded-full shadow-lg bg-white m-2 p-2 cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'>
              <RiSuitcaseFill size={20} />
              <span className='pl-3'>EXPERIENCE</span>
            </a>
            <a href='#main' className='font-Roboto-Mono text-base w-[75%] flex justify-center items-center rounded-full shadow-lg bg-white m-2 p-2 cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'>
              <FaCode size={20} />
              <span className='pl-3'>PROJECTS</span>
            </a>
            <a href='#main' className='font-Roboto-Mono text-base w-[75%] flex justify-center items-center rounded-full shadow-lg bg-white m-2 p-2 cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'>
              <RiContactsBook2Fill size={20} />
              <span className='pl-3'>CONTACT</span>
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar