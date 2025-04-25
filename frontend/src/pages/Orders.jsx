import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import axios from 'axios';

const Orders = () => {

  const { backendUrl, token, currency } = useContext(ShopContext);

  const [orderData, setorderData] = useState([])

  const loadOrderData = async () => {
    try{
      if(!token){
        return null
      }
      const response = await axios.post(backendUrl + '/api/order/userorders',{},{headers:{token}})
      if(response.data.success){
        let allOrdersItem = []
        response.data.orders.map((order)=>{
          order.items.map((item)=>{
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
          })
        })
        setorderData(allOrdersItem.reverse())
      }

    }  catch (error) {

    }
  }

  useEffect(()=>{
    loadOrderData()
  },[token])

  return (
    <div className = 'border-t pt-16'>
      <div className='text-2xl'>
        <Title text1= {'MY'} text2 = {'ORDERS'}/>
      </div>

      <div>
        {
          orderData.map((item,index)=>(
            <div key = {index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-start gap-6 text-sm'>
                <img className='w-16 sm:w-20' src={item.image[0]} alt = ''/>
                <div>
                  <p className='onest-thick sm:text-base font-medium text-gray-100'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-2 text-base text-gray-100'>
                    <p className ='onest-norm text-lg'>{currency}{item.price}</p>
                    <p className ='onest-norm'>Quantity: {item.quantity}</p>
                    <p className ='onest-norm'>Size: {item.size}</p>
                  </div>
                  <p className='onest-norm mt-1 text-gray-100'> Date: <span className ='onest-thin text-gray-300'>{new Date(item.date).toDateString()}</span></p>
                  <p className='onest-norm mt-1 text-gray-100'> Payment: <span className ='onest-thin text-gray-300'>{item.paymentMethod}</span></p>
                </div>
                
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='onest-norm text-sm md:text-base text-gray-400'>{item.status}</p>
                </div>
                <button onClick={loadOrderData} className='onest-thick border bg-white text-black px-4 py-2 text-sm font-medium rounded-sm'>TRACK ORDER</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders
