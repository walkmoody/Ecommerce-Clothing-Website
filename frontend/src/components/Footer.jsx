import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    
    <div>
        <div className ='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt =""/>
                <img src={assets.wmlogo} className='mb-5 w-24 animate-sine' alt =""/>
                
            </div>

            <div>
                <p className ='onest-norm text-center text-xl font-bold mb-5 text-white'>LINKS</p>
                <ul className ='flex flex-col gap-1 text-white'>
                    <a href='https://github.com/walkmoody' target = "_blank" rel="noopener noreferrer">
                        <li className='onest-norm border-2 rounded text-center cursor-pointer bg-gray-900 font-bold hover:bg-gray-600'>Github</li>
                    </a>

                    <a href='https://www.linkedin.com/in/walkermoody/' target = "_blank" rel="noopener noreferrer">
                        <li className='onest-norm border-2 rounded text-center cursor-pointer bg-gray-900 font-bold hover:bg-gray-600'>Linkedin</li>
                    </a>

                    <a href='https://www.instagram.com/walkercmoody/' target = "_blank" rel="noopener noreferrer">
                        <li className='onest-norm border-2 rounded text-center cursor-pointer bg-gray-900 font-bold hover:bg-gray-600'>Instagram</li>
                    </a>

                    <a href='https://www.wamoody.com/' target = "_blank" rel="noopener noreferrer">
                        <li className='onest-norm border-2 rounded text-center cursor-pointer bg-gray-900 font-bold hover:bg-gray-600'>wamoody.com</li>
                    </a>
                    
                </ul>
            </div>

            <div>
                <p className ='onest-norm text-xl font-bold mb-5 text-white text-center'>GET IN TOUCH</p>
                <ul className ='border-2 rounded text-center flex flex-col gap-1 text-white bg-gray-900 font-bold px-2 py-5'>
                    <li className='onest-norm'>(512)-277-0615</li>
                    <li className='onest-norm'>moodywalkertx@gmail.com</li>
                    <li className='onest-norm'>wamoody@ttu.edu</li>
                </ul>
            </div>

        </div>

        <div>
            <hr />
            <p className = 'onest-thin py-5 text-sm text-center text-gray-300'>Copyright 2025 @ Walker Moody - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
