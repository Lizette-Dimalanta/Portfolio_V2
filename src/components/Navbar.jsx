import React, { useState } from 'react'
import { CgMenuGridR } from "react-icons/cg";
import { IoIosArrowUp } from "react-icons/io";
import MenuOverlay from './MenuOverlay';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className='border-white border-x-[20px] border-t-[10px] border-b-8 shadow-lg'>
      <div className='flex place-items-center justify-between'>
        <button>
          <h1 className='text-3xl font-bold italic bg-white hover:scale-105 transition-all ease-in-out duration-300'>LIZETTE
            <span className='not-italic'> DIMALALNTA</span>
          </h1>
        </button>
      </div>
      <div>
        <CgMenuGridR onClick={handleToggle} className='text-lg cursor-pointer md:hidden flex gap-4 hover:scale-125 transition-all ease-in-out duration-300' />
      </div>
    </div>
  )

  return (
  // ├⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Name (Homepage Button) & Toggle Menu ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯┤
    <header className='border-white border-x-[20px] border-t-[10px] border-b-8 shadow-lg'>
      <div className='flex place-items-center justify-between'>
        <button>
          <h1 className='text-3xl font-bold italic bg-white hover:scale-105 transition-all ease-in-out duration-300'>LIZETTE
            <span className='not-italic'> DIMALALNTA</span>
          </h1>
        </button>
        
        <div className='hidden md:flex gap-4 '>
          {menu.map((item) => (
            <div key={item.id}>
              <h2 className='font-Roboto-Mono text-base cursor-pointer hover:scale-110 transition-all ease-in-out duration-300 hover:animate-pulse'>{item.title}</h2>
            </div>
          ))}
        </div>
        <div className='md:hidden'>
          {! toggle ? <CgMenuGridR onClick={() => setToggle(!toggle)} className='text-lg cursor-pointer hover:scale-125 transition-all ease-in-out duration-300'/>
          : <IoIosArrowUp onClick={() => setToggle(!toggle)} className='text-lg cursor-pointer'/> }
          {toggle ? <MenuOverlay menu = {menu} /> : null}
        </div>
      </div>
    </header>
  )
}

export default Navbar



// import React, { useState } from 'react'
// import { CgMenuGridR } from "react-icons/cg";
// import { IoIosArrowUp } from "react-icons/io";
// import MenuOverlay from './MenuOverlay';

// const Navbar = () => {
//   const [toggle, setToggle] = useState(false)
//   // ├⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Menu Items ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯┤
//   const menu = [
//     {
//         id:1,
//         title:'HOME'
//     },
//     {
//         id:2,
//         title:'ABOUT'
//     },
//     {
//         id:3,
//         title:'EXPERIENCE'
//     },
//     {
//         id:4,
//         title:'EDUCATION'
//     },
//     {
//         id:5,
//         title:'PROJECTS'
//     }
// ]
//   return (
//   // ├⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Name (Homepage Button) & Toggle Menu ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯┤
//     <header className='border-white border-x-[20px] border-t-[10px] border-b-8 shadow-lg'>
//       <div className='flex place-items-center justify-between'>
//         <button>
//           <h1 className='text-3xl font-bold italic bg-white hover:scale-105 transition-all ease-in-out duration-300'>LIZETTE
//             <span className='not-italic'> DIMALALNTA</span>
//           </h1>
//         </button>
        
//         <div className='hidden md:flex gap-4 '>
//           {menu.map((item) => (
//             <div key={item.id}>
//               <h2 className='font-Roboto-Mono text-base cursor-pointer hover:scale-110 transition-all ease-in-out duration-300 hover:animate-pulse'>{item.title}</h2>
//             </div>
//           ))}
//         </div>
//         <div className='md:hidden'>
//           {! toggle ? <CgMenuGridR onClick={() => setToggle(!toggle)} className='text-lg cursor-pointer hover:scale-125 transition-all ease-in-out duration-300'/>
//           : <IoIosArrowUp onClick={() => setToggle(!toggle)} className='text-lg cursor-pointer'/> }
//           {toggle ? <MenuOverlay menu = {menu} /> : null}
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Navbar

