import React from 'react'
import { TfiLinkedin, TfiGithub } from 'react-icons/tfi'
import { ImProfile } from 'react-icons/im'

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
                <div className='max-w-[1040px] font-Inter text-white space-x-4'>
                    <a href='/Resume - Lizette Dimalanta.pdf' 
                        onClick={resumeNavigation}
                        className="inline-block font-Roboto-Mono font-semibold text-white text-md p-[9.5px] bg-slate-700 rounded-md shadow-md hover:bg-slate-900 hover:text-sky-400">
                        <ImProfile size={32}/>
                    </a>
                    <a href='https://www.linkedin.com/in/lizettedimalanta/' 
                        onClick={linkedinNavigation}
                        className="inline-block font-Roboto-Mono font-semibold text-white text-md px-2 py-2 bg-slate-700 rounded-md shadow-md hover:bg-slate-900 hover:text-sky-400">
                        <TfiLinkedin size={35}/>
                    </a>
                    <a href='https://github.com/Lizette-Dimalanta' 
                        onClick={githubNavigation}
                        className="inline-block font-Roboto-Mono font-semibold text-white text-md px-2 py-2 bg-slate-700 rounded-md shadow-md hover:bg-slate-900 hover:text-sky-400">
                        <TfiGithub size={35}/>
                    </a>
                    <h3 className='text-start text-xs pt-5 text-white/50'>
                        ©2023 Lizette Dimalanta
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Footer