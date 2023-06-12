import React from 'react'
import ProjectItem from './ProjectItem'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
// import CarouselComponent from './CarouselComponent'

const projectData = [
  {
    title: 'Full-Stack Barbeque Planner Application',
    tags: [
      'React',
      'Bootstrap',
      'MongoDB',
      'Mongoose',
      'Express',
      'NodeJS',
      'Railway'
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adip',
    images: [
      '/images/BarbequePlannerAddParticipant.png',
      '/images/BarbequePlannerParticipantsList.png',
      '/images/BarbequePlannerShoppingList.png'
    ]
  },
  {
    title: 'Customer Relationship Management (CRM) API Web Server',
    tags: [
      'Python',
    ],
    description: '',
    images: []
  }
]

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto'>
        <h1 className='font-DM-Sherif-Display italic font-semibold text-4xl text-stone-900 text-center sm:text-start underline underline-offset-8 pt-10 pb-5 sm:pl-5'>
          PROJECTS
        </h1>
        {projectData.map((project, projectID) => (
          <div key={projectID}>
            <ProjectItem 
              title={project.title}
              tags={project.tags}
              description={project.description}
              images={project.images}
            />
          </div>
        ))}
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