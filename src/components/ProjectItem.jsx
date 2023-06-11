import React from 'react'

const ProjectItem = ({ img, title }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 group hover:bg-gradient-to-b from-gray-200 to-gray-600'>
        <img src={img} alt="/" className='rounded-sm group-hover:opacity-10'/>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[50%] translate-y-[50%]'>
            <h3 className='text-2xl font-semibold text-white tracking-wider text-center'>
                {title}
            </h3>
        </div>
    </div>
  )
}

export default ProjectItem