import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'

const ProductsItem = ({id,image,name,price}) => {
    const { currency } = useContext(ShopContext);
    const [isHovered, setIsHovered] = useState(false);

  return (
    <Link className = 'text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className ='overflow-hidden'>
            <img className = 'object-cover shadow-md hover:scale-110 transition ease-in-out rounded-lg' 
            src={isHovered ? image[1] : image[0]} alt = ""
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
            />
        </div>
        <p className ='onest-thick text-center pt-3 pb-1 text-sm text-gray-100'>{name}</p>
        <p className ='onest-thin text-center text-sm font-medium text-gray-200'>{currency}{price}</p>
    </Link>
  )
}

export default ProductsItem
