import React from 'react'
import { AiOutlineArrowDown } from "react-icons/ai";

const Home = () => {
  return (
    <div className='flex border-black border-2 mt-3 relative'>
        <img src='../images/ProfilePhoto.jpg' alt='Profile Image' className='w-1/2 h-auto items-start object-cover'/>
        <div className='text-left font-Inter mt-5 ml-5 sm:text-3xl sm:mt-14 sm:ml-14 md:text-4xl md:m-20 lg:text-5xl lg:m-28 xl:text-5xl xl:m-36'>
          <p>Passion,</p>
          <p>Creativity,</p>
          <p>Development,</p>
          <p>Humility.</p>
        </div>
        <button className='font-Roboto-Mono absolute bottom-0 right-0 mb-4 mr-4'>
          Get to know me 
          <AiOutlineArrowDown  className='inline ml-1' />
        </button>
    </div>
  )
}

export default Home