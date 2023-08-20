import { React, useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'

const Home = ( ) => {
  const [animationsComplete, setAnimationsComplete] = useState(false);
  
  const resumeNavigation = () => {
    window.open(resume)
  }
  const githubNavigation = () => {
      window.open(github)
  }
  const linkedinNavigation = () => {
      window.open(linkedin)
  }
  
  const handleAnimationComplete = () => {
    setAnimationsComplete(true);
  };

  return (
    <div className='h-screen'>
      <img src='/images/HeroBackground.jpeg' 
           alt='background image' 
           className='w-full h-full absolute object-cover object-center z-0'/>
      <div className='w-full h-full absolute top-15 left-0 bg-slate-800/30'>
      <div>
        <div className='font-Roboto-Mono tracking-wide text-white font-semibold flex text-2xl sm:text-4xl place-content-start pl-6 sm:pl-24 pt-32 sm:pt-36'>
          <TypeAnimation
            sequence={[
              'Hi there!',
              1000
            ]}
            wrapper='div'
            cursor={false}
            repeat={Infinity}
            style={{ display: 'inline-block'}}
          />
        </div>
        <div className='font-DM-Sherif-Display italic tracking-wide text-white font-semibold flex text-5xl pt-5 sm:text-8xl place-content-start pl-6 sm:pl-24 sm:pt-10'>
          <TypeAnimation
            sequence={[
              1500,
              'I\'m Lizette.',
            ]}
            wrapper='div'
            cursor={false}
            repeat={Infinity}
            style={{ display: 'inline-block' }}
          />
        </div>
        <div className='font-Roboto-Mono tracking-wide text-white font-semibold flex text-2xl sm:text-4xl place-content-start pl-6 sm:pl-24 pt-10'>
          <TypeAnimation
            sequence={[
              3000,
              'I am a full-stack developer.'
            ]}
            wrapper='div'
            cursor={false}
            repeat={Infinity}
            style={{ display: 'inline-block'}}
            onComplete={handleAnimationComplete}
          />
        </div>
      </div>
      {animationsComplete && (
        <div className='font-Roboto-Mono font-semibold text-white text-2xl flex justify-end items-end sm:place-content-end sm:items-end whitespace-nowrap flex-col pt-52 sm:pt-36 pr-5 sm:pr-24'>
          <div className='hover:scale-110 transition-all ease-in-out duration-300'>
            <a href='/2023Resume.pdf' 
              onClick={resumeNavigation} 
              className='cursor-pointer tracking-wide bg-slate-800/60 rounded-md px-2 py-0.5 m-1'> 
                RESUME
            </a>
          </div>
          <div className='pt-4 hover:scale-110 transition-all ease-in-out duration-300'>
            <a href='https://www.linkedin.com/in/lizettedimalanta/' 
              onClick={linkedinNavigation} 
              className='cursor-pointer tracking-wide bg-slate-800/60 rounded-md px-2 py-0.5 m-1'> 
                LINKEDIN
            </a>
          </div>
          <div className='pt-4 hover:scale-110 transition-all ease-in-out duration-300'>
            <a href='https://github.com/Lizette-Dimalanta' 
              onClick={githubNavigation} 
              className='cursor-pointer tracking-wide bg-slate-800/60 rounded-md px-2 py-0.5 m-1'> 
                GITHUB
            </a>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Home

