import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className ='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-sx sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={assets.returnIcon} className ='w-12 m-auto mb-5' alt=""/>
            <p className ='onest-thick'>Exchange Policy</p>
            <p className ='onest-norm text-gray-400'>We don't offer an exchage policy all purchases are final</p>
        </div>
        <div>
            <img src={assets.qualityIcon} className ='w-12 m-auto mb-5' alt=""/>
            <p className ='onest-thick'>Quality Products</p>
            <p className ='onest-norm text-gray-400'>We do have the greatest quality products</p>
        </div>
        <div>
            <img src={assets.supportIcon} className ='w-12 m-auto mb-5' alt=""/>
            <p className ='onest-thick'>Great Customer Support</p>
            <p className ='onest-norm text-gray-400'>Shoot us an email and we will get back within one business day</p>
        </div>
    </div>
  )
}

export default OurPolicy
