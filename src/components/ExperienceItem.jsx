import React from 'react'

const ExperienceItem = ({ year, company, position, duration, details }) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
      <li className='mb-10 ml-4'>
          <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white'/>
          <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
            <span className='inline-block font-Roboto-Mono font-semibold text-white px-2 py-1 bg-stone-600 rounded-md'>{year}</span>
            <span className='font-Roboto-Mono font-semibold tracking-wide text-lg'>{company}</span>
            <span className='font-Roboto-Mono text-md'>{position}</span>
            <span className='font-Roboto-Mono font-semibold tracking-wide text-xs'>{duration}</span>
          </p>
          <p>{details}</p>
      </li>
    </ol>
  )
}

export default ExperienceItem