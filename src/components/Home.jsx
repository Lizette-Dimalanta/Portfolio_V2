import React from 'react'
import { TypeAnimation } from 'react-type-animation'
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
    </div>
  )
}

{/* <div id='main' className='bg-fixed h-screen bg-cover bg-center' style={{ backgroundImage: `url(${'../images/ProfileImage.jpeg'})` }}></div> */}

{/* <img src='../images/ProfileImage.jpeg' alt='Profile Image' className='w-full h-screen object-cover'/> */}

export default Home
