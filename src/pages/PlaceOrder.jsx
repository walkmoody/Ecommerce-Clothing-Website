import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const [method, setMethod] = useState('applepay');

  const {navigate} = useContext(ShopContext);

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vg] border-t'>
      {/* Left Side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className = 'text-xl sm:text-2xl my-3'>
          <Title text1 ={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
        <div className ='flex gap-3'>
          <input className = 'onest-thin border border-gray-300 text-white bg-black rounded py-1.5 px-3.5 w-full' type ='text' placeholder='First Name'/>
          <input className = 'onest-thin border border-gray-300 text-white bg-black rounded py-1.5 px-3.5 w-full' type ='text' placeholder='Last Name'/>
        </div>
        <input className = 'onest-thin border border-gray-300 text-white bg-black rounded py-1.5 px-3.5 w-full' type ='email' placeholder='Email Address'/>
        <input className = 'onest-thin border border-gray-300 text-white bg-black rounded py-1.5 px-3.5 w-full' type ='text' placeholder='Street'/>
        <div className ='flex gap-3'>
          <input className = 'onest-thin border border-gray-300 text-white bg-black rounded py-1.5 px-3.5 w-full' type ='text' placeholder='City'/>
          <input className = 'onest-thin border border-gray-300 text-white bg-black rounded py-1.5 px-3.5 w-full' type ='text' placeholder='State'/>
        </div>
        <div className ='flex gap-3'>
          <input className = 'onest-thin border border-gray-300 text-white bg-black rounded py-1.5 px-3.5 w-full' type ='number' placeholder='Zipcode'/>
          <input className = 'onest-thin border border-gray-300 text-white bg-black rounded py-1.5 px-3.5 w-full' type ='text' placeholder='Country'/>
        </div>
        <input className = 'onest-thin border border-gray-300 text-white bg-black rounded py-1.5 px-3.5 w-full' type ='number' placeholder='Phone'/>
      </div>
      {/* Right Side */}
      <div className ='mt-8'>

        <div className='mt-8 min-w-80'>
          <CartTotal/>
        </div>
        <div className='mt-12'>
          <Title text1= {'PAYMENT'} text2= {'METHOD'}/>
          {/*Payment Method Selection */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img className = 'h-5 mx-4' src={assets.stripeLogo} alt=""/>
            </div>
            <div onClick={()=>setMethod('razorpay')}className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img className = 'h-5 mx-4' src={assets.razorpayLogo} alt=""/>
            </div>
            <div onClick={()=>setMethod('applepay')} className='bg-white flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border border-black rounded-full ${method === 'applepay' ? 'bg-green-400' : ''}`}></p>
              <img className = 'h-5 mx-4' src={assets.applepayLogo} alt=""/>
            </div>
          </div>

          <div className='w-full text-end mt-8'>
            <button onClick={()=>navigate('./orders')}className='onest-thick bg-white text-black px-16 py-3 tex-sm'>PLACE ORDER</button>

          </div>
        </div>

      </div>
    </div>
  )
}

export default PlaceOrder
