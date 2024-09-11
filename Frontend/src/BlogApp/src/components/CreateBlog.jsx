import React, { useState } from 'react'
import { SlLogout } from "react-icons/sl";
import { MdPreview } from "react-icons/md";
import { useNavigate} from 'react-router-dom'


const CreateBlog = () => {
  const navigate = useNavigate()
  const [status ,setstatus] = useState('draft')
  const [Preview , setPreview] = useState([])
  const [clickedpre , setclickedpre ] = useState(false)
  const [file ,setfile] =  useState('')

  const LogoutUser =async()=>{
  try {
     const response = await  fetch("http://localhost:8000/api/v1/logoutUser" , {
          method : 'POST',
          "Authotrization" : `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type' : 'application/json'
        })
        if(response.ok){
          localStorage.removeItem('accessToken')
          localStorage.removeItem('refreshToken')
          navigate('/login')
          console.log("User Logged Out Successfully from frontend")
        }else{
          console.log("Error Logging out" , response)
        }
  } catch (error) {
    console.log("Error Occured Before enetering the logout function" , error.message)
  }
      

  }

  // const getfilePath =(e)=>{
  // console.log(e)
  // console.log(e.target.files[0])
  // setfile(e.target.files[0])
  // }

  const PostCreate = async(e)=>{
     e.preventDefault() 
     console.log(e)
   const formData = {
    Title : e.target[0].value,
    Description : e.target[1].value,
    featuredImage : e.target[2].files[0],
    Status : status
   } 
    console.log(formData)
    setPreview([...Preview , formData])
    try {
     const accessToken = localStorage.getItem('accessToken')
     const response =  await fetch('http://localhost:8000/api/v1/users/createPost',{
        method : 'POST',
        headers :{
          'Authorization' : `Bearer ${accessToken}`,
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(formData),
       })
      if(!response.ok){
        console.log('Response was not Ok in creating Post' ,response)
      }else{
        console.log("Post Created Successfully")
      }
    } catch (error) {
      console.log("Post Could not be Created due to error" , error.message)
    }
  }

  return (
    <>
       <div className='w-screen h-fit sm:h-screen bg-slate-200 pt-8 flex flex-col items-center gap-10 relative'>
        <button className='text-xl bg-orange-600 text-white w-fit h-fit px-3 py-2  rounded-lg hover:underline hover:bg-white hover:text-orange-600 hover:ring-1 hover:ring-orange-600 transition-all absolute sm:top-8 sm:right-8 hidden sm:block' onClick={LogoutUser}>Logout</button>
        <SlLogout  className='absolute sm:hidden text-xl top-6 right-6 ' title='Logout' onClick={LogoutUser}/>
         <div className='w-full text-center px-10 sm:px-32 m'>
          <h1 className='text-3xl font-medium '>Create Your Next MasterPiece !</h1>
          <p className='mt-8  text-lg font-NewFont'>"Ready to inspire, inform, or entertain? Start writing your blog post and share your thoughts with a community of readers. You’re just a few clicks away from making an impact."</p>
          <p className=' text-lg font-NewFont'>"Tell your story, share your ideas, and connect with readers around the globe. Write your blog post below and hit publish to make your voice heard."
          "Ready to inspire, inform, or entertain? Start writing your blog post and share your thoughts with a community of readers. You’re just a few clicks away from making an impact."</p>
         </div>
         <div className='flex sm:flex-row flex-col gap-4 justify-center items-center ring-1 m-8 ring-slate-400 w-fit h-fit p-8 rounded-xl relative'>
         <MdPreview className='text-2xl absolute top-10 right-10 cursor-pointer' title='Prview Your Post' onClick={()=>{setclickedpre(true)}} />
         <span className=' absolute top-16 right-7 text-sm hover:underline hover:text-indigo-700'>Preview</span>

          <div>
            <img src="https://img.freepik.com/free-vector/blogger-concept-sharing-media-content-internet-idea-social-media-network-online-communication-giveaway-advert-isolated-flat-vector-illustration_613284-2022.jpg?w=900&t=st=1725686880~exp=1725687480~hmac=ed9219714c2e7bc471fb0dd9dc973440a7a1c740b6a6159f6d7d16b443c15554" alt="Blog Image" className=' sm:w-80 w-60'/>
          </div>
          <div>
            <form onSubmit={PostCreate} method='POST' encType="multipart/form-data">
              <div className='flex sm:flex-row flex-col gap-4 '>

              <div className='flex flex-col gap-4'>
                <div>
                <label htmlFor="" className='text-xl font-medium'>Title : </label>
                <input type="text"  className='w-64 h-10 rounded-lg px-3 outline-none focus:border-b-2 focus:border-slate-500' placeholder='Write A Tile for the post' name='Title' />
                </div>
              
              <div className='flex flex-col'>
              <label htmlFor="" className='text-xl font-medium mb-2'>Description : </label>
              <textarea name="Description" id="" className=' focus:border-b-2 focus:border-slate-500 outline-none rounded-lg h-20 px-3 py-2' placeholder='Write A Description ' ></textarea>

              </div>
              </div>
              
              <div className='flex flex-col gap-10 sm:gap-14'>
                <div>
               <label htmlFor="" className='text-xl font-medium '>Upload Image :</label>
              <input type="file" name="featuredImage" id="" className='mt-2 ' />
                </div>
              <div className=' flex gap-2  items-center '>
              <label htmlFor=""  className='text-xl font-medium '>Status :</label>
               <select name="Status" onChange={(e)=>setstatus(e.target.value)} id="Status" value={status} className='w-32 h-10 rounded-lg px-4 outline-none focus:border-b-2 focus:border-slate-500' > 
                <option value="published" >Published</option>
                <option value="archieved">Archieved</option>
                <option value="draft">Draft</option>
               </select>
              </div>
              </div>
              </div>
              <button type='Submit' className=' w-full mt-4 h-8 bg-orange-600 text-white hover:text-orange-600 hover:bg-white hover:ring-1 hover:ring-orange-600 transition-all rounded-lg '>Create Post</button>
            </form>
          </div>
         </div>
      <div className='w-full flex flex-wrap p-4  justify-center items-center'>
         {
          clickedpre && (<div>
               {
                 Preview.map((post)=>(
                  <div className='flex flex-col p-4 items-center justify-center w-fit h-fit ring-1 bg-white ring-slate-500 rounded-lg mb-4 hover:shadow-md hover:shadow-gray-500' key={post.Title}>
                  <img src={post.featuredImage} alt="postimage" className='w-48 h-36  rounded-lg '/>
                  <span className='text-sm'>{post.Status}</span>
                  <span className='text-lg '>{post.Title}</span>
                  <p className='text-lg '>{post.Description}</p>
                </div>
                 ))
               }
           </div>)
         }
      </div>
       </div>
    </>
  )
}

export default CreateBlog