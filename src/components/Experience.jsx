import React from 'react'
import ExperienceItem from './ExperienceItem'

const data = [
  {
    year: 2023,
    company: '/ Victorian Building Authority',
    position: 'DATA ENTRY OFFICER',
    duration: 'Present',
    details: [
      '• Delivering practitioner registration administration to support the licensing and registration scheme for building and plumbing practitioners within Victoria.',
      '• Creating and maintaining database records for all new applicants and existing practitioners.',
      '• Ensuring activities are carried out in line with relevant legislative framework in accordance with operational guidelines.',
      '• Providing assistance with electronic and telephone enquiries from external and internal stakeholders.'
    ]
  },
  {
    year: 2021,
    company: '/ Monger Tech',
    position: 'ADMINISTRATOR',
    duration: '8 mos',
    details: [
      '• Maintained business operations in an IoT, SaaS and hybrid B2B/B2C startup setting.',
      '• Oversaw organisational cash flow, budgets, receipts, wages and reports.',
      '• Developed responsive and data-driven UX/UI designs using high-level prototypes and mockups.',
      '• Conducted usability testing and research on SEO and user personas.',
      '• Creation of e-commerce sites and social media content.'
    ]
  },
  {
    year: 2018,
    company: '/ Coles',
    position: 'ACTING DAIRY MANAGER',
    duration: '3 yrs 2 mos',
    details: [
      '• Primary support for transitioning management and understaffed roles throughout the duration of COVID-19.',
      '• Proficiency in managing 6 departments across several Gold Coast and Melbourne locations.',
      '• Specialised in POS, grocery and cold-chain inventory management.',
      '• Promoted as a Customer Service Supervisor within the initial 3 months of employment.'
    ]
  },
  {
    year: 2015,
    company: '/ McDonalds',
    position: 'CREW MEMBER',
    duration: '3 yrs 8 mos',
    details: [
      '• Developed customer service and time management skills in a dynamic and fast-paced environment.',
      '• Maintained and prioritised smooth customer traffic within unpredictable timeframes.',
      '• Provided additional support during the Commonwealth Games and similar large-scale events previously held in the Gold Coast.',
      '• Completed a Certificate III in Retail Services.'
    ]
  }
]

const Experience = () => {
  return (
    <div id='Experience' className='max-w-[1040px] m-auto'>
      <h1 className='font-DM-Sherif-Display italic font-semibold text-4xl text-stone-900 text-start underline underline-offset-8 py-10 pl-1'>
        EXPERIENCE
      </h1>
        {data.map((item, itemid) => (
          <ExperienceItem 
            key={itemid} 
            year={item.year} 
            company={item.company} 
            position={item.position} 
            duration={item.duration}
            details={item.details} />
        ))}
    </div>
  )
}

export default Experience