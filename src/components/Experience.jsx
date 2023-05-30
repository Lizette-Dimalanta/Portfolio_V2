import React from 'react'
import ExperienceItem from './ExperienceItem'

const data = [
  {
    year: 2023,
    company: 'VICTORIAN BUILDING AUTHORITY -',
    position: 'Data Entry Officer',
    duration: 'Present',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
  },
  {
    year: 2021,
    company: 'MONGER TECH -',
    position: 'Administrator',
    duration: '8 mos',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
  },
  {
    year: 2018,
    company: 'COLES -',
    position: 'Acting Dairy Manager',
    duration: '3 yrs 2 mos',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
  },
  {
    year: 2015,
    company: 'MCDONALDS -',
    position: 'Crew Member',
    duration: '3 yrs 8 mos',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
  }
]

const Experience = () => {
  return (
    <div id='Experience' className='max-w-[1040px] m-auto p-4'>
      <h1 className='font-DM-Sherif-Display italic font-semibold text-4xl text-stone-900 text-start p-4 '>
        EXPERIENCE
      </h1>
      <div className='border-2 border-black p-4'>
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
    </div>
  )
}

export default Experience