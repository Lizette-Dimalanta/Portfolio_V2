import React from 'react'
import HTMLCSSPortfolio from '/images/HTMLCSSPortfolio.png'
import BarbequePlannerApp from '/images/BarbequePlannerApp.jpeg'
import CrmAPI from '/images/CrmAPI.jpeg'
import PoofIntro from '/images/PoofIntro.jpg'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='font-DM-Sherif-Display italic font-semibold text-4xl text-stone-900 text-start underline underline-offset-8 py-10 pl-1'>
          Projects
        </h1>

    </div>
  )
}

export default Projects

{/* <p className='flex text-start font-Inter tracking-wide text-slate-800 text-sm p-1'>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis odio esse, consequatur aspernatur pariatur provident. Illum ducimus minus sapiente totam atque? Iste qui, eveniet est vitae quasi odit? Officia, voluptas.
</p>
<div className='grid sm:grid-cols-2 gap-12'>
<ProjectItem img={BarbequePlannerApp} title='Full-Stack Barbeque Planner Application'/>
<ProjectItem img={CrmAPI} title='Customer Relationship Management (CRM) API'/>
<ProjectItem img={HTMLCSSPortfolio} title='HTML / CSS Portfolio Website'/>
<ProjectItem img={PoofIntro} title='Python Terminal Application'/>
</div> */}