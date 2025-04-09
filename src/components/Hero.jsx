import React from 'react'
import {assets} from '../assets/assets'

const Hero = () => {
  return (
    <div style ={{paddingLeft : '30px', paddingRight: '30px'}}>
    <br></br>
    <div className ='flex flex-col sm:flex-row border border-none'>{/*Change border-none to border-gray-500 */}
        
        {/*Hero left side */}
        
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141]'>
                <div className = 'flex items-center gap-2'>
                  <p className ='w-10 md:w-11 h-[2px] bg-gray-300'></p>
                    <p className='onest-thin text-sm md:text-base text-gray-100'>GREATEST PRODUCTS</p>
                    
                </div>
                <h1 className = 'rock-salt-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed text-gray-100'>Latest Arrivals</h1>
                <div className ='flex items-center gap-2'>
                  <p className = 'onest-thin text-sm md:text-base text-gray-100'>SHOP NOW</p>
                  <p className = 'w-10 md:w-11 h-[2px] bg-gray-300'></p>

                </div>
            </div>
        </div>
        {/*Hero right side */}
        <img className ='w-full sm:w-1/2 rounded-lg' src={assets.landingPageIcon} alt="" />

    </div>
    <br></br>
    <p className ='h-[2px] bg-[gray]'></p>
    </div>
  )
}

export default Hero
