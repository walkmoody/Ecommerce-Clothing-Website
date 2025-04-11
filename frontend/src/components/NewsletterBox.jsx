import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) =>{
        event.preventDefault();
    }

  return (
    <div className ='text-center'>
      <p className ='onest-norm text-2xl font-medium text-gray-100'>Subscribe to the Newsletter</p>
      <p className ='onest-norm text-gray-400 mt-3'>
        Please subscribe to the Newsletter for updates on new products
      </p>
      <form onSubmit ={onSubmitHandler} className ='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 rounded'>
        <input className ='onest-thin w-full sm:flex-1 outline-black text-white bg-black' type="email" placeholder ='Enter your email'/>
        <button type='submit' className ='onest-thick bg-white text-black text-sx px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsletterBox
