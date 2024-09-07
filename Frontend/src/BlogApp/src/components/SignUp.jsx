import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
  const navigate = useNavigate()
  
  const Submitform =async(e)=>{
    
    e.preventDefault()
    const formData = {
      UserName : e.target[0].value,
      Email : e.target[1].value,
      Password : e.target[2].value
    }
    try {
   const response =  await fetch("http://localhost:8000/api/v1/registeruser",{
        method : 'POST',
        headers :{
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(formData)
      })
      
      console.log(response)
      if(!response.ok){
        console.log("User was not registered")
      }else{
        console.log("User Registeres Successfully")
         navigate('/Login')
      }

      
    } catch (error) {
      console.log("Error Submitting Form" , error.message)
    }
  }
  return (
   <>
     <div className='w-full h-screen bg-slate-200 flex justify-center items-center '>
        <div className='bg-slate-200 w-fit h-fit rounded-lg p-10 flex 
        sm:flex-row flex-col justify-center items-center gap-6 mx-10 sm:mx-0 ring-1 ring-slate-400 '>
      <div className='w-80'>
        <img src="https://img.freepik.com/premium-vector/illustration-sign-up-log-wireframe-idea-showcasing-various-ui-elements_1278800-10909.jpg?w=900" alt="SignUp/image"  />
      </div>
      <div className=' w-fit h-fit text-center'>
        <h1 className='text-3xl mb-4 font-medium'>SignUp</h1>
        <form onSubmit={Submitform}  className='flex flex-col justify-center items-center gap-4 '>
            <div className='flex justify-center items-center'>
        <label htmlFor="" className='text-lg'>UserName : </label>
        <input type="text" required className='focus:ring-1 rounded-md focus:ring-gray-500 outline-none w-50 h-6 ml-2 px-4 py-4' placeholder='Enter Your Username' name='UserName' />
            </div>
            <div className='flex justify-center items-center'>

        <label htmlFor="" className='text-lg'>Email : </label>
        <input type="text" required className='focus:ring-1 rounded-md focus:ring-gray-500 outline-none w-50 h-6 ml-10 px-4 py-4' placeholder='Enter Your Email' name='Email'/>
            </div>
            <div className='flex justify-center items-center'>

        <label htmlFor="" className='text-lg'>Password : </label>
        <input type="password" required className='focus:ring-1 rounded-md focus:ring-gray-500 outline-none w-50 ml-2 h-6 px-4 py-4' placeholder='Enter Password'  name='Password'/>
            </div>
            <span>Already have an Account ? <NavLink to='/Login' className='text-indigo-600 hover:underline cursor-pointer'>Login</NavLink></span>
            <button type='submit' className='w- h-fit px-3 py-2 bg-orange-600 text-lg text-white transition-all rounded-md hover:ring-1 hover:ring-orange-600 hover:bg-white hover:text-orange-600 sm:w-80 w-60 '>
                Submit
            </button>
        </form>
      </div>
        </div>
     </div>
   </>
  )
}

export default SignUp