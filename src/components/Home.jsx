import React from 'react'

const Home = () => {
  return (
    <div className='flex border-black border-2 mt-3'>
        <img src='../images/ProfilePhoto.jpg' alt='Profile Image' className='w-1/2 h-auto items-start object-cover'/>
        <div className='text-left font-Inter mt-5 ml-5 sm:text-3xl sm:mt-14 sm:ml-14 md:text-4xl md:m-20 lg:text-5xl lg:m-28 xl:text-5xl xl:m-36'>
          <p>Lorem ipsum,</p>
          <p>dolor sit amet,</p>
          <p>consectetur,</p>
          <p>adipiscing.</p>
        </div>
    </div>
  )
}

export default Home