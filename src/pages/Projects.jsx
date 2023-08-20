import React from 'react'
import ProjectItem from '../components/ProjectItem'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const projectData = [
  {
    title: 'Ribbit: Frog-Themed Reddit (IN PROGRESS)',
    tags: [
      'React',
      'Bootstrap',
      'MongoDB',
      'Mongoose',
      'Express',
      'NodeJS',
      'Railway'
    ],
    description: 'A Frog-themed Reddit social media clone. Inspired by the recent Reddit API news.',
    images: [
      '/images/Ribbit.png'
    ],
    github: 'https://github.com/Lizette-Dimalanta/Ribbit',
    website: 'https://ribbit-alpha.vercel.app/'
  },
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
    description: 'Collaborative MERN application to manage food and drink quantities for friend and family barbeque events.',
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
    description: "Built to provide the core foundation to expand accordingly to maximise the efficiency of a business' needs.",
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
    description: 'First portfolio version created with HTML and CSS. An exhibition of my capabilities, creativity and personality.',
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
    description: 'An interactive text-based mystery game, playing in the first-person perspective of a clueless scientist.',
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
    <div id='projects' className='max-w-[1100px] m-auto sm:px-20 bg-white shadow-md pt-10'>
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