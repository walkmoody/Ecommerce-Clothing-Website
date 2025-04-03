import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'

const ProductsItem = ({id,image,name,price}) => {
    const {currency} = useContext(ShopContext);
  return (
    <Link className = 'text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className ='overflow-hidden'>
            <img className = 'object-cover shadow-md hover:scale-110 transition ease-in-out rounded-lg' src={image[0]} alt = ""/>
        </div>
        <p className ='onest-norm pt-3 pb-1 text-sm'>{name} </p>
        <p className ='onest-norm text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductsItem
