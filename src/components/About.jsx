import React from 'react'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
// import AboutCarousel from './AboutCarousel'

const About = () => {

  return (
    <div id='About' className='max-w-[1040px] m-auto px-5 flex flex-col md:flex-row py-20'>
      <div className='md:w-1/2'>
        <h1 className='font-DM-Sherif-Display italic font-semibold text-4xl text-slate-900 text-start underline underline-offset-8 py-10 sm:pl-1'>
          ABOUT
        </h1>
        <p className='flex text-start font-Inter tracking-wide text-slate-800 text-md p-1 leading-loose pb-5 pr-10'>
          A passionate, driven and explorative thinker - fuelled by curiosity in discovering innovative solutions through the combination of business, design, technological and humanitarian perspectives. 
        </p>
        <h2 className='font-DM-Sherif-Display italic font-semibold text-3xl text-slate-700 text-start py-3'>
          Find out more:
        </h2>

        <Accordion allowZeroExpanded className='text-start pr-10'>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton className='px-3 py-1 font-Roboto-Mono text-md border-[1px] border-slate-200 rounded-md shadow-sm'>
                ▾ "How would your friends describe you?"
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className='px-4 py-2'>
              <p className='text-lg italic'>
                "Lizette is funny, hardworking and loveable. She makes a great partner in any project and always gives the task at hand 110%."
              </p>
              <p className='font-Inter text-sm tracking-wide text-slate-600/70 pl-4'> 
                ⏤ Billy Monger (UX/UI Designer at Monger Tech)
              </p>
              <p className='text-lg italic pt-5'>
              "A very excited and enthusiastic person who elevates the energy in the room! Also concerns herself with making sure everyone is doing well."
              </p>
              <p className='font-Inter text-sm tracking-wide text-slate-600/70 pl-4'> 
                ⏤ Ben Maud (Friend)
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className='pt-2'>
            <AccordionItemHeading>
              <AccordionItemButton className='px-3 py-1 font-Roboto-Mono text-md text-slate-700 border-[1px] border-slate-200 rounded-md shadow-sm'>
                ▾ "What are your interests?"
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className='px-4 py-2'>
              <p className='font-Inter text-start text-sm tracking-wide text-slate-800 pl-4 leading-loose'> 
                I'm a huge nerd for tech, philosophy, music, games and plants! You'll often find me exploring random topics or trying something new.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>

      <div className='md:w-1/2 flex justify-end py-10'>
        <Carousel
          showStatus={false}
          showIndicators={true}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          className="overflow-hidden"
        >
          <div>
            <img src="../public/images/Hiking.jpeg" alt="Hiking" />
          </div>
          <div>
            <img src="../public/images/Coding2.jpeg" alt="Coding2" />
          </div>
          <div>
            <img src="../public/images/CA.jpg" alt="Coder Academy" />
          </div>
          <div>
            <img src="../public/images/Music.jpg" alt="Music" />
          </div>
          <div>
            <img src="../public/images/Coding1.JPG" alt="Coding1" />
          </div>
        </Carousel>
      </div>
    </div>
  )
}

{/* <h2 className='font-DM-Sherif-Display italic font-semibold text-3xl text-stone-600 text-start py-10 pl-1'>
"How would your friends describe you?"
</h2>
<div className='flex text-start font-Inter tracking-wide text-slate-800 text-md p-1 w-1/2 leading-loose'>
<p className='inline-block font-Inter font-semibold text-white px-2 py-1 bg-sky-950/60 rounded-md'>
  "Lizette is funny, hardworking and loveable. She makes a great partner in any project and always gives the task at hand 110%." - Billy Monger
</p>
</div> */}

export default About