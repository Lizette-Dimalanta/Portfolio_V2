import { React, useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { TfiLinkedin, TfiGithub } from 'react-icons/tfi'
import { ImProfile } from 'react-icons/im'

const Home = ( ) => {
  const [animationsComplete, setAnimationsComplete] = useState(false);

  useEffect(() => {
    const delayTime = 5200;

    const delayTimer = setTimeout(() => {
      setAnimationsComplete(true);
    }, delayTime);

    return () => clearTimeout(delayTimer);
  }, []);
  
  const resumeNavigation = () => {
    window.open(resume)
  }
  const githubNavigation = () => {
      window.open(github)
  }
  const linkedinNavigation = () => {
      window.open(linkedin)
  }

  return (
    <div className='h-screen'>
      <img src='/images/HeroBackground.jpeg' 
        alt='background image' 
        className='w-full h-full absolute object-cover object-center z-0'/>
      <div className='w-full h-full absolute top-15 left-0 bg-slate-800/30'>
      <div>
        <div className='font-Roboto-Mono tracking-wide text-white font-semibold flex text-2xl sm:text-4xl place-content-center sm:place-content-start pl-6 sm:pl-24 pt-32 sm:pt-36'>
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
        <div className='font-DM-Sherif-Display italic tracking-wide text-white font-semibold flex text-5xl pt-5 sm:text-8xl place-content-center sm:place-content-start pl-6 sm:pl-24 sm:pt-10'>
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
        <div className='font-Roboto-Mono tracking-wide text-white font-semibold flex text-2xl sm:text-4xl place-content-center sm:place-content-start pl-6 sm:pl-24 pt-10'>
          <TypeAnimation
            sequence={[
              3000,
              'I am a full-stack developer.'
            ]}
            wrapper='div'
            cursor={false}
            repeat={Infinity}
            style={{ display: 'inline-block'}}
          />
        </div>
      </div>
      {animationsComplete && (
        <div className='font-Roboto-Mono font-semibold text-white text-2xl flex place-content-center sm:place-content-start pt-96 sm:pt-44 sm:pl-24'>
          <div className='max-w-[1040px] font-Inter text-white space-x-4'>
                <a href={'/Resume-Lizette-Dimalanta.pdf' }
                  onClick={resumeNavigation}
                  className="inline-block font-Roboto-Mono font-semibold text-white text-md p-[9.5px] bg-slate-800 rounded-md shadow-md hover:bg-slate-900 hover:text-sky-400 hover:scale-110 transition-all ease-in-out duration-300">
                  <ImProfile size={32}/>
                </a>
                <a href='https://www.linkedin.com/in/lizettedimalanta/' 
                  onClick={linkedinNavigation}
                  className="inline-block font-Roboto-Mono font-semibold text-white text-md px-2 py-2 bg-slate-800 rounded-md shadow-md hover:bg-slate-900 hover:text-sky-400 hover:scale-110 transition-all ease-in-out duration-300">
                  <TfiLinkedin size={35}/>
                </a>
                <a href='https://github.com/Lizette-Dimalanta' 
                  onClick={githubNavigation}
                  className="inline-block font-Roboto-Mono font-semibold text-white text-md px-2 py-2 bg-slate-800 rounded-md shadow-md hover:bg-slate-900 hover:text-sky-400 hover:scale-110 transition-all ease-in-out duration-300">
                  <TfiGithub size={35}/>
                </a>
            </div>
          </div>
      )}
      </div>
    </div>
  )
}

export default Home

