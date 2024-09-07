import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Hero = () => {
  return (
   <>
   <div className='w-full h-screen sm:px-20 px-8  '>
    <div className='bg-slate-100 sm:py-8 py-2 h-screen flex sm:flex-row flex-col justify-evenly  gap-8'>
      <div className='sm:w-[400px] sm:mt-10 w-auto  px-4'>
        <h1 className='text-4xl '>
          Welcome to Your Creative Corner!
        </h1>
          <span className='text-gray-400 text-lg '><i>Where Your Words Find Their Home</i></span>
          <p className='sm:text-lg font-medium mt-4 sm:w-80 text-sm'>"Welcome to <span className='text-indigo-500 text-xl'>BlogSphere</span> , the platform where your thoughts come to life. Whether you're a seasoned writer or just getting started, this is the space to share your ideas, stories, and experiences with the world. Join a vibrant community of creators, engage with readers, and explore limitless possibilities. Start writing today and let your words inspire, inform, and connect with people everywhere."
        </p>
        <div className='flex w-fit gap-2 items-center ring-1 ring-orange-600 px-3 py-2 mt-4 hover:bg-orange-600 hover:text-white transition-all'>
        <NavLink to='/SignUp'>
          Get Started
        </NavLink>
          <FaLongArrowAltRight />
        </div>

      </div>
      <div className='sm:w-[600px] sm:h-48 w-auto px-4 sm:m-10'>
         <img src="https://img.freepik.com/free-vector/blog-post-concept-illustration_114360-26355.jpg?t=st=1725618279~exp=1725621879~hmac=3e4acc79566d15f6e29be30127b4fde8ab038f4caa8f1d120cca9e161acb63ad&w=996" alt="image" />
      </div>
    </div>
   </div>
   </>
  )
}

export default Hero