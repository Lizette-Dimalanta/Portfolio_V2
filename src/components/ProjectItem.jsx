import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { BsGlobe2 } from 'react-icons/bs'
import { TfiGithub } from 'react-icons/tfi'

const ProjectItem = ({ title, tags, description, images, github, website }) => {
    const githubNavigation = () => {
        window.open(github)
    }
    const websiteNavigation = () => {
        window.open(website)
    }

  return (
    <div className='px-5 pt-3'>
        <div className='max-w-[1040px] m-auto flex flex-col md:flex-row py-7 border-2 border-slate-200/50 rounded-lg px-7 shadow-sm'>
            <div className='md:w-2/5 self-center min-w-[40%]'>
                <Carousel
                    showStatus={false}
                    showIndicators={true}
                    showThumbs={false}
                    infiniteLoop={true}
                    interval={3000}
                    className='overflow-hidden rounded-lg shadow-sm'
                    >
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Image ${index}`} />
                        </div>
                    ))}
                </Carousel>
            </div>
            <ol className='flex flex-col md:flex-row'>
                <li className='pt-5 md:pt-0 sm:pl-10'>
                    <h2 className='text-left font-Roboto-Mono font-semibold text-md'>
                        {title}
                    </h2>
                    <div className='text-start space-x-1 space-y-2'>
                        {tags.map((tag, tagID) => (
                            <p key={tagID} className='inline-block font-Roboto-Mono font-semibold text-white text-sm px-2 py-1 bg-sky-950/30 rounded-full'>
                                {tag}
                            </p>
                        ))}
                    </div>
                    <p className='flex text-start font-Inter tracking-wide text-slate-800 text-sm pt-5'>
                        {description}
                    </p>
                    <div className='text-black flex justify-end space-x-3 pt-5'>
                        {website && (
                            <button className='inline-block font-Roboto-Mono font-semibold text-white text-md px-2 py-2 bg-slate-700 rounded-md shadow-md hover:bg-slate-900 hover:text-sky-300' onClick={websiteNavigation}>
                                <BsGlobe2 size={20}/>
                            </button>
                        )}
                        <button className='inline-block font-Roboto-Mono font-semibold text-white text-md px-2 py-2 bg-slate-700 rounded-md shadow-md hover:bg-slate-900 hover:text-sky-300' onClick={githubNavigation}>
                            <TfiGithub size={20}/>
                        </button>
                    </div>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default ProjectItem