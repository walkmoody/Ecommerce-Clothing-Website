import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'

const PlaceOrder = () => {

  const [method, setMethod] = useState('temp');
  const {navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products} = useContext(ShopContext);
  const [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    zipcode:'',
    country:'',
    phone:'',
  })

  const onChangeHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;

    setFormData(data => ({...data, [name]:value}))
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      
      let orderItems = []

      for(const items in cartItems){
        for(const item in cartItems[items]){
          if(cartItems[items][item] > 0){
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if(itemInfo){
              itemInfo.size = item
              itemInfo.quantity = cartItems[items][item] 
              orderItems.push(itemInfo)
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee

      }
      console.log(method)
      switch(method){
        
        // API Calls for temp
        
        case 'temp':  
          console.log(token)
          const response = await axios.post(backendUrl + '/api/order/place', orderData, {headers: {token}})
          console.log(response.data)
          if (response.data.success){
            setCartItems({})
            navigate('/orders')
          } else {
            console.error("Order submission error:", error);
            toast.error(response.data.message)
          }
          break;

        default:
    
          break;
      }
      
    } catch (error) {

    }
  }

  return (
    <form onSubmit = {onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vg] border-t'>
      {/* Left Side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className = 'text-xl sm:text-2xl my-3'>
          <Title text1 ={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
        <div className ='flex gap-3'>
          <input required onChange={onChangeHandler} name ='firstName' value = {formData.firstName} className = 'onest-thin border border-gray-300 text-white bg-black rounded py-1.5 px-3.5 w-full' type ='text' placeholder='First Name'/>
          <input required onChange={onChangeHandler} name ='lastName' value = {formData.lastName} className = 'onest-thin border border-gray-300 text-white bg-black rounded py-1.5 px-3.5 w-full' type ='text' placeholder='Last Name'/>
        </div>
        <input required onChange={onChangeHandler} name ='email' value = {formData.email} className = 'onest-thin border border-gray-300 text-white bg-black rounded py-1.5 px-3.5 w-full' type ='email' placeholder='Email Address'/>
        <input required onChange={onChangeHandler} name ='street' value = {formData.street} className = 'onest-thin border border-gray-300 text-white bg-black rounded py-1.5 px-3.5 w-full' type ='text' placeholder='Street'/>
        <div className ='flex gap-3'>
          <input required onChange={onChangeHandler} name ='city' value = {formData.city} className = 'onest-thin border border-gray-300 text-white bg-black rounded py-1.5 px-3.5 w-full' type ='text' placeholder='City'/>
          <input required onChange={onChangeHandler} name ='state' value = {formData.state} className = 'onest-thin border border-gray-300 text-white bg-black rounded py-1.5 px-3.5 w-full' type ='text' placeholder='State'/>
        </div>
        <div className ='flex gap-3'>
          <input required onChange={onChangeHandler} name ='zipcode' value = {formData.zipcode} className = 'onest-thin border border-gray-300 text-white bg-black rounded py-1.5 px-3.5 w-full' type ='number' placeholder='Zipcode'/>
          <input required onChange={onChangeHandler} name ='country' value = {formData.country} className = 'onest-thin border border-gray-300 text-white bg-black rounded py-1.5 px-3.5 w-full' type ='text' placeholder='Country'/>
        </div>
        <input required onChange={onChangeHandler} name ='phone' value = {formData.phone} className = 'onest-thin border border-gray-300 text-white bg-black rounded py-1.5 px-3.5 w-full' type ='number' placeholder='Phone'/>
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
          <div onClick={()=>setMethod('temp')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'temp' ? 'bg-green-400' : ''}`}></p>
              <img className = 'h-5 mx-4' src={assets.logo} alt=""/>
            </div>
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
            <button type='submit' className='onest-thick bg-white text-black px-16 py-3 tex-sm'>PLACE ORDER</button>

          </div>
        </div>

      </div>
    </form>
  )
}

export default PlaceOrder
