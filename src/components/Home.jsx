import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { MdContactPage } from 'react-icons/md'
import { GrLinkedin } from "react-icons/gr"
import { VscGithubInverted } from "react-icons/vsc"
// import { AiOutlineArrowDown } from 'react-icons/ai';

const Home = () => {
  return (
    <div id='main' className='bg-fixed h-screen bg-cover bg-center' style={{ backgroundImage: `url(${'../images/ProfileImage.jpeg'})` }}>
      <div className='w-full h-screen absolute top-15 left-0 bg-slate-600/20'>
      <div>
        <h2 className='font-Inter text-white font-semibold flex text-4xl place-content-center pt-48 sm:text-3xl sm:place-content-start sm:pl-24 sm:pt-32'>
          I am a
        </h2>
        <h2 className='font-DM-Sherif-Display italic tracking-wide text-white font-semibold flex text-5xl place-content-center pt-48 sm:text-7xl sm:place-content-start sm:pl-24 sm:pt-5'>
          <TypeAnimation
          sequence={[
            'Driven', // Types 'One'
            2000, // Waits 1s
            'Passionate', // Deletes 'One' and types 'Two'
            2000, // Waits 2s
            'Creative', // Types 'One'
            2000, // Waits 1s
            'Humble', // Types 'One'
            2000, // Waits 1s
          ]}
          wrapper='div'
          cursor={true}
          repeat={Infinity}
          style={{ display: 'inline-block' }}
          />
        </h2>
        <h2 className='font-Inter text-white font-semibold flex text-4xl place-content-center pt-48 sm:text-4xl sm:place-content-start sm:pl-24 sm:pt-6' > 
          Web Developer.
        </h2>
      </div>
      <div className='inline-flex whitespace-nowrap flex-col pt-48 pl-8'>
        <a href='' className='cursor-pointer flex items-center rounded-md shadow-lg bg-white m-1 p-1.5'>
          <MdContactPage size={25} />
          <span className='pl-2 inline-block'>Resume</span>
        </a>
        <a href='' className='cursor-pointer flex items-center rounded-md shadow-lg bg-white m-1 p-1.5'>
          <GrLinkedin size={20} />
          <span className='pl-2 inline-block'>LinkedIn</span>
        </a>
        <a href='' className='cursor-pointer flex items-center rounded-md shadow-lg bg-white m-1 p-1.5'>
          <VscGithubInverted size={20} />
          <span className='pl-2 inline-block'>GitHub</span>
        </a>
        </div>
      </div>
    </div>
  )
}

export default Home
