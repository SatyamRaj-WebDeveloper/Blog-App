import React from 'react'
import {NavLink} from 'react-router-dom'
import { CgMenuRight } from "react-icons/cg";

const NavBar = () => {
  return (
   <>
    <div className='sm:w-full h-20 bg-gray-200 w-screen'>
        <nav className='flex justify-between items-center  h-full'>
           <h1 className='text-2xl font-bold mx-4 text-indigo-600 ' >BlogSphere</h1>
            <input type="text" className='w-[500px] h-8 px-3 py-2 rounded-r-full rounded-l-full outline-none hidden' placeholder='Search'/>
           <ul>
            <div className='sm:flex justify-between items-center w-fit p-4 gap-4 hidden'>
            <NavLink className='text-xl font-medium hover:bg-orange-600 hover:text-white text-orange-600 h-fit w-fit px-3 py-2 rounded-md transition-all hover:underline '>
                Login
            </NavLink>
            <NavLink className='text-xl font-medium hover:bg-orange-600 hover:text-white text-orange-600 h-fit w-fit px-3 py-2 rounded-md transition-all hover:underline '>
                SignUp
            </NavLink>
            </div>

            </ul> 
            <CgMenuRight  className='sm:hidden text-2xl mx-4  ' title='Menu'/>
        </nav>
    </div>
   </>
  )
}

export default NavBar