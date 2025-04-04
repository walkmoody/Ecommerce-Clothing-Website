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
        <img className='w-full md:max-w-[480px]' src={assets.contactImg} alt=''/>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='onest-thick text-xl text-gray-100'>Contact us here:</p>
          <p className='onest-norm text-xl text-gray-100'>Phone: Phone number <br/> Email: fakeEmail@email.com</p>
        </div>

      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact
