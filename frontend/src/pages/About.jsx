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
          <p className='onest-norm'>We believe style should never compromise comfort. Born from a passion for timeless fashion and everyday ease, our collections are designed to fit your life—effortlessly. Whether you're dressing up or keeping it casual, our pieces are made to move with you, feel good on you, and express the best version of you.</p>
          <b className='onest-thick text-gray-100'>Our Mission</b>
          <p className='onest-norm'>To empower individuals through thoughtfully designed clothing that blends comfort, style, and sustainability. We’re here to make getting dressed the easiest part of your day—while leaving a lighter footprint on the planet.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2 = {'US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded'>
          <b className='onest-thick text-gray-100'>Quality Assurance:</b>
          <p className='onest-norm text-white'>We don't cut corners—ever. Every piece we create goes through rigorous quality checks to ensure it meets our high standards for durability, comfort, and craftsmanship. From the stitching to the fabric, we obsess over the details so you don't have to. When you wear our product, you're wearing clothing built to last.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded'>
          <b className='onest-thick text-gray-100'>Convenience:</b>
          <p className='onest-norm text-white'>We make shopping easy and stress-free—from smooth browsing to fast, reliable shipping. Our collections are curated to help you find your look without the guesswork, and our customer support is always here when you need a hand. Fashion should fit into your life, not the other way around.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded'>
          <b className='onest-thick text-gray-100'>Great Customer Service:</b>
          <p className='onest-norm text-white'>Our customers are at the heart of everything we do. Whether you have a question, need help with sizing, or just want style advice, our friendly support team is ready to assist—quickly, kindly, and with a personal touch. Because great service isn't a bonus—it's the standard.</p>
        </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
