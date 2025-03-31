import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    
    <div>
        <div className ='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt =""/>
                <p className ='onest-norm w-full md:w-2/3 text-gray-600'>
                Super awesome website 
                </p>
            </div>

            <div>
                <p className ='onest-norm text-xl font-medium mb-5'>COMPANY</p>
                <ul className ='flex flex-col gap-1 text-gray-600'>
                    <li className='onest-norm'>Home</li>
                    <li className='onest-norm'>About Us</li>
                    <li className='onest-norm'>Delivery</li>
                    <li className='onest-norm'>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className ='onest-norm text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className ='flex flex-col gap-1 text-gray-600'>
                    <li className='onest-norm'>REPLACE WITH PHONE NUMBER</li>
                    <li className='onest-norm'>REPLACE WITH EMAIL</li>
                </ul>
            </div>

        </div>

        <div>
            <hr />
            <p className = 'onest-norm py-5 text-sm text-center text-gray-700'>Copyright 2025 @ (CHANGE THIS) - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
