import React from 'react'
import { CgMenuGridR } from "react-icons/cg";

const Navbar = () => {

  const menuList=[
    {
        id:1,
        title:'HOME'
    },
    {
        id:1,
        title:'ABOUT'
    },
    {
        id:1,
        title:'EXPERIENCE'
    },
    {
        id:1,
        title:'EDUCATION'
    },
    {
        id:1,
        title:'PROJECTS'
    }
]

  return (
    <div className='flex items- justify-between'>
      <div>
        <h1 className='text-[30px] font-bold italic'>LIZETTE
        <span className='not-italic'> DIMALALNTA</span></h1>
      </div>
      <div className='hidden md:flex gap-4'>
        {menuList.map((item) => (
          <div>
            <h2 className='font-Roboto-Mono hover:underline cursor-pointer hover:animate-pulse'>{item.title}</h2>
          </div>
        ))}
      </div>
      <div className='md:hidden'>
        <CgMenuGridR className='text-[22px]'/>
      </div>
    </div>
  )
}

export default Navbar

// 'shadow-md w-full fixed top-10 left-0'