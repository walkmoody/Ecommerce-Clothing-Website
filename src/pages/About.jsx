import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text=2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-2-[450px]' src={assets.aboutIcon} alt=""/>
          <p className='onest-norm'>Make up some awesome about section and put it here</p>
          <p></p>
      </div>
    </div>
  )
}

export default About
