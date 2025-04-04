import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text=2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] rounded-lg' src={assets.landingPageIcon} alt=""/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-100'>
          <p className='onest-norm'>Make up some about section and put it here</p>
          <p className='onest-norm'>And then make up a little more about stuff and put that here</p>
          <b className='onest-thick text-gray-100'>Our Mission</b>
          <p className='onest-norm'>Make up a mission statement</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2 = {'US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='onest-thick text-gray-100'>Quality assurance:</b>
          <p className='onest-norm text-white'>We test our products to make sure theyre good</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='onest-thick text-gray-100'>Convenience:</b>
          <p className='onest-norm text-white'>Websites good so its Convenient</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='onest-thick text-gray-100'>Great Customer Service:</b>
          <p className='onest-norm text-white'>We respond pretty quick</p>
        </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
