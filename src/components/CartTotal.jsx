import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {

    const {currency, delivery_fee, getCartAmount} = useContext(ShopContext);

  return (
    <div className = 'w-full'>
      <div className = 'text-2xl'>
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>
      <div className = 'flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p className = 'onest-norm text-gray-100'>Subtotal</p>
                <p className = 'onest-thick'>{currency}{getCartAmount()}.00</p>
            </div>
            <hr/>
            <div className='flex justify-between'>
                <p className = 'onest-norm text-gray-100'>Shipping Fee</p>
                <p className = 'onest-thick'>{currency}{delivery_fee}.00</p>
            </div>
            <hr/>
            <div className='flex justify-between'>
                <p className = 'onest-norm text-gray-100'>Total</p>
                <p className = 'onest-thick' >{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</p>
            </div>

      </div>
    </div>
  )
}

export default CartTotal
