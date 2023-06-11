import React from 'react'
import ProjectItem from './ProjectItem'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

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
    description: 'Lorem ipsum dolor sit amet, consectetur adip'
  }
  // {
  //   title: 'C'
  //   tags:
  //   description:
  // }
]

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto'>
        <h1 className='font-DM-Sherif-Display italic font-semibold text-4xl text-stone-900 text-start underline underline-offset-8 py-10 pl-1'>
          PROJECTS
        </h1>
        <div className='flex flex-col md:flex-row py-10 border-2 border-slate-200/50 rounded-md'>
          <div className='md:w-2/5 pl-10'>
            <Carousel
              showStatus={false}
              showIndicators={true}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={3000}
              className="overflow-hidden rounded-lg"
            >
              <div>
                <img src="/images/BarbequePlannerAddParticipant.png" alt="Barbeque Planner App" />
              </div>
              <div>
                <img src="/images/BarbequePlannerParticipantsList.png" alt="Barbeque Planner Participants List" />
              </div>
              <div>
                <img src="/images/BarbequePlannerShoppingList.png" alt="Barbeque Planner Shopping List" />
              </div>
            </Carousel>
          </div>
          <div className='md:w-1/2 flex pl-10'>
            {projectData.map((project, projectID) => (
              <div key={projectID}>
                <ProjectItem 
                  title={project.title}
                  tags={project.tags}
                  description={project.description}
                />
              </div>
            ))}
          </div>
        </div>
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