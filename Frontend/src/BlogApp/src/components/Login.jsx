import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { IoEye } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";

const Login = () => {
    const [response , setresponse] = useState(true)
    const [Text ,setText] = useState('Password')


   const navigate = useNavigate()
    const handleLogin=async(e)=>{
       e.preventDefault();
       const fornData ={
        Email : e.target[0].value,
        Password : e.target[1].value
       }
    try {
        const response =  await fetch('http://localhost:8000/api/v1/login' , {
            method : 'POST',
            headers :{
                'Content-Type' :'application/json'
            },
            body : JSON.stringify(fornData)
          })
          const data = await  response.json();
          const accessToken = data.data.accessToken
          const refreshToken = data.data.refreshToken
       if(!response.ok) {
        console.log("Response was not ok")
        setresponse(response.ok)
       } else {
        localStorage.setItem('accessToken' , accessToken);
        localStorage.setItem('refreshToken' ,refreshToken);
        console.log("User Logged In Successfully")
        navigate('/createBlog')
       }
       
    } catch (error) {
        console.log("Error Occured While loogin in " , error.message)
    }}

  return (
   <>
   <div className='w-full bg-slate-200 h-screen flex justify-center items-center'>
   <div className=' w-fit h-fit text-center  bg-slate-200 p-6 rounded-md flex justify-center items-center gap-8 sm:flex-row flex-col ring-1 ring-slate-400'>
    <div>
        <img src="https://img.freepik.com/premium-vector/digital-illustration-man-demonstrating-online-authentication-large-tablet-display_941526-3693.jpg?w=740" alt="" className='sm:w-80 w-60 '/>
    </div>
   <div>
   <h1 className='text-3xl mb-4 font-medium'>Login</h1>
        <form onSubmit={handleLogin} className='flex flex-col justify-center items-center gap-4 '>
            <div className='flex justify-center items-center '>
        <label htmlFor="" className='text-lg w-20 sm:w-16'>Email : </label>
        <input type="text" className='focus:ring-1 rounded-md focus:ring-gray-500 outline-none w-50 h-6 ml-10 px-4 py-4' placeholder='Enter Your Email' required name='Email'/>
            </div>
            <div className='flex justify-center items-center'>
        <div className='flex items-center relative'>
        <label htmlFor="" className='text-lg'>Password : </label>
        <input type={Text} className='focus:ring-1 rounded-md focus:ring-gray-500 outline-none w-50 ml-2 h-6 px-4 py-4' placeholder='Enter Password'  required name='Password'/>
        {
            Text==='Password' ? <IoEye className='text-xl absolute right-2 cursor-pointer' onClick={()=>setText('text')}/>
             : <IoEyeOffSharp className='text-xl absolute right-2 cursor-pointer' onClick={()=>setText('Password')}/>
        }
            </div>
        </div>
            {
                response ? null : <span className='text-red-600 font-medium'>Incorrect Email or Password</span>
            }
            <span>Create an Account ? <NavLink to='/SignUp' className='text-violet-800 hover:underline cursor-pointer'>SignUp</NavLink></span>
            <button type='submit' className=' sm:w-80 w-60  h-fit px-3 py-2 bg-orange-600 text-lg text-white transition-all rounded-md hover:ring-1 hover:ring-orange-600 hover:bg-white hover:text-orange-600 '>
                Login
            </button>
        </form>
   </div>
      </div>
   </div>
   </>
  )
}

export default Login