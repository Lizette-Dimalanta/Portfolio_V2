import React from 'react'

const ProjectItem = ({ title, tags, description }) => {
  return (
    <ol className='flex flex-col md:flex-row justify-start'>
        <li className='mb-10 ml-4'>
            <h2 className='text-start font-Roboto-Mono font-semibold text-md'>
                {title}
            </h2>
            <p className='space-x-1 space-y-2 '>
                {tags.map((tag, tagID) => (
                    <p key={tagID} className='inline-block font-Roboto-Mono font-semibold text-white text-sm px-2 py-1 bg-sky-950/30 rounded-full'>
                        {tag}
                    </p>
                ))}
            </p>
        </li>
    </ol>
  )
}

export default ProjectItem