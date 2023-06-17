import React from 'react'
import { TfiLinkedin, TfiGithub } from "react-icons/tfi"
import { ImProfile } from "react-icons/im"

const Footer = () => {
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
    <div className='pt-10'>
        <div className='w-screen m-auto px-5 bg-slate-800 py-10 flex justify-center'>
            <div className='max-w-[1040px] font-Inter text-sm text-white space-x-4'>
                <a href='/2023Resume.pdf' onClick={resumeNavigation}
                   className="inline-block font-Roboto-Mono font-semibold text-white text-md p-[9.5px] bg-slate-700 rounded-md shadow- hover:bg-slate-900 hover:text-sky-400" onClick={githubNavigation}>
                    <ImProfile size={32}/>
                </a>
                <a href='https://www.linkedin.com/in/lizettedimalanta/' onClick={linkedinNavigation}
                   className="inline-block font-Roboto-Mono font-semibold text-white text-md px-2 py-2 bg-slate-700 rounded-md shadow- hover:bg-slate-900 hover:text-sky-400" onClick={githubNavigation}>
                    <TfiLinkedin size={35}/>
                </a>
                <a href='https://github.com/Lizette-Dimalanta' onClick={githubNavigation}
                   className="inline-block font-Roboto-Mono font-semibold text-white text-md px-2 py-2 bg-slate-700 rounded-md shadow- hover:bg-slate-900 hover:text-sky-400" onClick={githubNavigation}>
                    <TfiGithub size={35}/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer