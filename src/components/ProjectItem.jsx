import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const ProjectItem = ({ title, tags, description, images }) => {
  return (
    <div className='px-5 pt-3'>
        <div className='max-w-[1040px] m-auto flex flex-col md:flex-row py-10 border-2 border-slate-200/50 rounded-md px-10 shadow-sm'>
            <div className='md:w-2/5'>
                <Carousel
                    showStatus={false}
                    showIndicators={true}
                    showThumbs={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={3000}
                    className="overflow-hidden rounded-lg"
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
                    <p className='text-start space-x-1 space-y-2'>
                    {tags.map((tag, tagID) => (
                        <p key={tagID} className='inline-block font-Roboto-Mono font-semibold text-white text-sm px-2 py-1 bg-sky-950/30 rounded-full'>
                        {tag}
                    </p>
                    ))}
                    </p>
                    <p className='flex text-start font-Inter tracking-wide text-slate-800 text-sm pt-5'>
                        {description}
                    </p>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default ProjectItem;
