import React, { useState } from 'react'

const CreateBlog = () => {
  const [status ,setstatus] = useState('draft')

  const PostCreate = async(e)=>{
     e.preventDefault() 
     console.log(e)
    const formData = {
      Title : e.target[0].value,
      Description : e.target[1].value,
      featuredImage : e.target[2].value,
      Status : status
    }
    console.log(formData)
    try {
     const accessToken = localStorage.getItem('accessToken')
     const response =  await fetch('http://localhost:8000/api/v1/users/createPost',{
        method : 'POST',
        credentials : 'include',
        headers :{
          'Authorization' : `Bearer ${accessToken}`,
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(formData),
        mode : 'cors'
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
       <div className='w-screen h-fit sm:h-screen bg-slate-200 pt-8 flex flex-col items-center gap-10'>
         <div className='w-full text-center px-10 sm:px-32 m'>
          <h1 className='text-3xl font-medium '>Create Your Next MasterPiece !</h1>
          <p className='mt-8  text-lg font-NewFont'>"Ready to inspire, inform, or entertain? Start writing your blog post and share your thoughts with a community of readers. You’re just a few clicks away from making an impact."</p>
          <p className=' text-lg font-NewFont'>"Tell your story, share your ideas, and connect with readers around the globe. Write your blog post below and hit publish to make your voice heard."
          "Ready to inspire, inform, or entertain? Start writing your blog post and share your thoughts with a community of readers. You’re just a few clicks away from making an impact."</p>
         </div>
         <div className='flex sm:flex-row flex-col gap-4 justify-center items-center ring-1 m-8 ring-slate-400 w-fit h-fit p-8 rounded-xl'>
          <div className=''>
            <img src="https://img.freepik.com/free-vector/blogger-concept-sharing-media-content-internet-idea-social-media-network-online-communication-giveaway-advert-isolated-flat-vector-illustration_613284-2022.jpg?w=900&t=st=1725686880~exp=1725687480~hmac=ed9219714c2e7bc471fb0dd9dc973440a7a1c740b6a6159f6d7d16b443c15554" alt="Blog Image" className=' sm:w-80 w-60'/>
          </div>
          <div>
            <form onSubmit={PostCreate}>
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
       </div>
    </>
  )
}

export default CreateBlog