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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    images: [
      '/images/BarbequePlannerAddParticipant.png',
      '/images/BarbequePlannerParticipantsList.png',
      '/images/BarbequePlannerShoppingList.png'
    ],
    github: 'https://github.com/Lizette-Dimalanta/T3A2-B-Full-Stack-App',
    website: 'https://t3a2-b-front-end-production.up.railway.app/'
  },
  {
    title: 'Customer Relationship Management (CRM) API Web Server',
    tags: [
      'Python',
      'SQLAlchemy',
      'PostgreSQL',
      'Marshmallow',
      'Flask',
      'RESTful API'
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    images: [
      '/images/CRMAPIProfiles.png',
      '/images/CRMAPIAddress.png'
    ],
    github: 'https://github.com/Lizette-Dimalanta/CRM_API',
    website: ''
  },
  {
    title: 'Portfolio Website v1',
    tags: [
      'HTML',
      'CSS',
      'Netlify'
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    images: [
      '/images/HTMLCSSPortfolioHome.png',
      '/images/HTMLCSSPortfolioAbout.png',
      '/images/HTMLCSSPortfolioProjects.png',
      '/images/HTMLCSSPortfolioBlog.png'
    ],
    github: 'https://github.com/Lizette-Dimalanta/HTML-CSS-Portfolio',
    website: 'https://630f5c86dd884a0e2997fad9--lizettedimalanta.netlify.app/'
  },
  {
    title: '"Poof!" - Python Terminal Application',
    tags: [
      'Python',
      'PIP'
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    images: [
      '/images/PoofIntroduction.png',
      '/images/PoofLog1.png',
      '/images/PoofChoicePoint.png',
      '/images/PoofLog2.png',
      '/images/PoofRecipeIntroduction.png'
    ],
    github: 'https://github.com/Lizette-Dimalanta/Python-Terminal-Application',
    website: ''
  }
]

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1060px] m-auto px-10 bg-white shadow-md pt-10'>
        <h1 className='font-DM-Sherif-Display italic font-semibold text-[45px] text-stone-900 text-center sm:text-start pt-10 pb-5 sm:pl-5'>
          PROJECTS
        </h1>
        {projectData.map((project, projectID) => (
          <div key={projectID}>
            <ProjectItem 
              title={project.title}
              tags={project.tags}
              description={project.description}
              images={project.images}
              github={project.github}
              website={project.website}
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