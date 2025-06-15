import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>

      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px] rounded-lg' src={assets.contactImg} alt=''/>
        <div className='border-2 flex flex-col justify-center items-start gap-6 bg-gray-900 rounded py-2 px-2'>
          <p className='onest-thick text-xl text-gray-100'>Contact Us Here:</p>
          <p className='onest-norm text-xl text-gray-100'>Phone: 512-277-0615 <br/> Email: moodywalkertx@gmail.com</p>
        </div>

      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact
