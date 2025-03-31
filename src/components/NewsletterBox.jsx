import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) =>{
        event.preventDefault();
    }

  return (
    <div className ='text-center'>
      <p className ='onest-norm text-2xl font-medium text-gray-800'>Subscribe to the Newsletter</p>
      <p className ='onest-norm text-gray-400 mt-3'>
        test text test text test wafwf31rr12r21r21r21r
      </p>
      <form onSubmit ={onSubmitHandler} className ='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className ='onest-thin w-full sm:flex-1 outline-none' type="email" placeholder ='Enter your email'/>
        <button type='submit' className ='onest-thick bg-black text-white text-sx px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsletterBox
