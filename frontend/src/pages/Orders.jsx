import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';

const Orders = () => {

  const { products, currency } = useContext(ShopContext);

  return (
    <div className = 'border-t pt-16'>
      <div className='text-2xl'>
        <Title text1= {'MY'} text2 = {'ORDERS'}/>
      </div>

      <div>
        {
          products.slice(1,4).map((item,index)=>(
            <div key = {index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-start gap-6 text-sm'>
                <img className='w-16 sm:w-20' src={item.image[0]} alt = ''/>
                <div>
                  <p className='onest-thick sm:text-base font-medium text-gray-100'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-2 text-base text-gray-100'>
                    <p className ='onest-norm text-lg'>{currency}{item.price}</p>
                    <p className ='onest-norm'>Quantity: 1</p>
                    <p className ='onest-norm'>Size: M</p>
                  </div>
                  <p className='onest-norm mt-2 text-gray-100'> Date: <span className ='onest-thin text-gray-300'>1, April, 2025</span></p>
                </div>
                
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='onest-norm text-sm md:text-base text-gray-400'>Ready to ship</p>
                </div>
                <button className='onest-thick border bg-white text-black px-4 py-2 text-sm font-medium rounded-sm'>TRACK ORDER</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders
