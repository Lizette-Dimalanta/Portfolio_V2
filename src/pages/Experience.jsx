import React from 'react'
import ExperienceItem from '../components/ExperienceItem'

const data = [
  {
    year: 2023,
    company: '/ Victorian Building Authority',
    position: 'DATA ENTRY OFFICER',
    duration: '[ Mar 2023 - Present ]',
    tags: [
      'Microsoft 365',
      'Microsoft Dynamics CRM',
      'Salesforce',
      'Cisco'
    ],
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
    duration: '[ Oct 2021 - May 2022 ]',
    tags: [
      'Figma',
      'Adobe Xd',
      'Adobe Photoshop'
    ],
    details: [
      '• Maintained business operations in an IoT, SaaS and hybrid B2B/B2C startup setting.',
      '• Oversaw organisational cash flow, budgets, receipts, wages and reports.',
      '• Developed responsive and data-driven UX/UI designs using high-level prototypes and mockups.',
      '• Conducted usability testing and research on SEO and user personas.',
      '• Creation of e-commerce sites and social media content.'
    ],
    carousel: [
      {
        image: '/images/MongerTechAdvertisement.png',
        caption: 'Monger Tech Advertisement'
      },
      {
        image: '/images/MongerTechOffice.jpg',
        caption: 'Monger Tech Office'
      },
      {
        image: '/images/MongerTrackers.png',
        caption: 'Monger Trackers'
      }
    ]
  },
  {
    year: 2018,
    company: '/ Coles',
    position: 'ACTING DAIRY MANAGER',
    duration: '[ Sep 2018 - Oct 2021 ]',
    tags: [],
    details: [
      '• Primary support for transitioning management and understaffed roles throughout the duration of COVID-19.',
      '• Proficiency in managing 6 departments across several Gold Coast and Melbourne locations.',
      '• Specialised in POS, grocery and cold-chain inventory management.',
      '• Promoted as a Customer Service Supervisor within the initial 3 months of employment.'
    ],
    carousel: [
      {
        image: '/images/Coles1.JPG',
        caption: 'Coles Image 1'
      },
      {
        image: '/images/Coles2.JPG',
        caption: 'Coles Image 2'
      }
    ]
  },
  {
    year: 2015,
    company: '/ McDonalds',
    position: 'CREW MEMBER',
    duration: '[ Dec 2015 - Jul 2019 ]',
    tags: [],
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
    <div id='experience' className='max-w-[1100px] m-auto sm:px-20 bg-white shadow-md'>
      <h1 className='font-DM-Sherif-Display italic font-semibold text-[45px] text-stone-900 text-center sm:text-start py-10 sm:pl-5'>
        EXPERIENCE
      </h1>
        {data.map((item, itemid) => (
          <div key={itemid}>
            <ExperienceItem 
              year={item.year} 
              company={item.company} 
              position={item.position} 
              duration={item.duration}
              tags={item.tags}
              details={item.details} 
              carousel={item.carousel}
            />
          </div>
        ))}
    </div>
  )
}

export default Experience
