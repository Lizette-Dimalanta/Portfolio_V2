import React from 'react'
import { IoIosSend } from "react-icons/io"

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1100px] m-auto sm:px-20 bg-white shadow-md pt-10'>
      <h1 className='font-DM-Sherif-Display italic font-semibold text-[45px] text-stone-900 text-center sm:text-start pt-10 pb-5 sm:pl-5'> 
        CONTACT
      </h1>
      <form action='https://getform.io/f/fc47d535-c380-47e4-89ef-5b5a786b21c3' method='POST' encType='multipart/form-data' className='px-5'>
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
          <div className='flex flex-col font-Inter text-start'>
            <label className='text-sm py-2'>
              Name
            </label>
            <input className='border-2 rounded-lg p-3 flex border-slate-200/60 shadow-sm' 
                   type='text' 
                   name='name' />
          </div>
          <div className='flex flex-col font-Inter text-start'>
            <label className='text-sm py-2'>
              Phone
              </label>
            <input className='border-2 rounded-lg p-3 flex border-slate-200/60 shadow-sm' 
                   type='text' 
                   name='phone' />
          </div>
        </div>
        <div className='flex flex-col py-2 font-Inter text-start'>
          <label className='text-sm py-2'>
            Email
          </label>
          <input className='border-2 rounded-lg p-3 flex border-slate-200/60 shadow-sm' 
                 type='email' name='email' />
        </div>
        <div className='flex flex-col py-2 font-Inter text-start'>
          <label className='text-sm py-2'>
            Subject
          </label>
          <input className='border-2 rounded-lg p-3 flex border-slate-200/60 shadow-sm' 
                 type='text' name='subject' />
        </div>
        <div className='flex flex-col py-2 font-Inter text-start'>
          <label className='text-sm py-2'>
            Message
          </label>
          <textarea className='border-2 rounded-lg p-3 border-slate-200/50 shadow-sm' 
                    rows='5' name='message' />
        </div>
        <div className='flex justify-end py-2'>
          <button className='font-Roboto-Mono font-semibold text-white text-md px-1 py-1 bg-slate-700 rounded-md shadow-md hover:bg-slate-900'>
            <IoIosSend size={30}/>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact