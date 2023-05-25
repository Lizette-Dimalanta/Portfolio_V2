import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { MdContactPage } from 'react-icons/md'
import { GrLinkedin } from "react-icons/gr"
import { VscGithubInverted } from "react-icons/vsc"
// import { AiOutlineArrowDown } from 'react-icons/ai';

const Home = () => {
  return (
    <div id='main' className='bg-fixed h-screen bg-cover bg-center' style={{ backgroundImage: `url(${'../images/ProfileImage.jpeg'})` }}>
      <div>
        <h2 className='font-DM-Sherif-Display italic tracking-wide text-white font-semibold flex text-5xl place-content-center pt-48 sm:text-6xl sm:place-content-start sm:pl-28 sm:pt-64'>
          <TypeAnimation
          sequence={[
            'Passion.', // Types 'One'
            2000, // Waits 1s
            'Creativity.', // Deletes 'One' and types 'Two'
            2000, // Waits 2s
            'Development.', // Types 'One'
            2000, // Waits 1s
            'Humility.', // Types 'One'
            2000, // Waits 1s
          ]}
          wrapper='div'
          cursor={true}
          repeat={Infinity}
          style={{ display: 'inline-block' }}
          />
        </h2>
      </div>
      <div className='flex pt-48 pl-28'>
          <MdContactPage size={20} className='cursor-pointer rounded-full shadow-lg bg-white' />
          <GrLinkedin size={20} className='cursor-pointer rounded-full shadow-lg bg-white' />
          <VscGithubInverted size={20} className='cursor-pointer rounded-full shadow-lg bg-white' />
        </div>
    </div>
  )
}

// place-content-end pr-24 pt-48

{/* <div id='main' className='bg-fixed h-screen bg-cover bg-center' style={{ backgroundImage: `url(${'../images/ProfileImage.jpeg'})` }}></div> */}

{/* <img src='../images/ProfileImage.jpeg' alt='Profile Image' className='w-full h-screen object-cover'/> */}

export default Home
