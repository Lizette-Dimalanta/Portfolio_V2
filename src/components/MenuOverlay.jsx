import React from 'react'

const MenuOverlay = ({ menu }) => {
  return (
    <div className='absolute left-0 min-h-full backdrop-blur-lg w-full mt-8'>
        {menu.map((item) => {
            return <h1 key={item.id} className='text-[15px] mb-6 justify-center mt-8 font-Roboto-Mono cursor-pointer hover:scale-110 transition-all ease-in-out duration-300 hover:animate-pulse'>{item.title}</h1>
        })}
    </div>
  )
}

export default MenuOverlay
