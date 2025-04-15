import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from "./Title"
import ProductsItem from './ProductsItem';


const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[products])
    
  return (
    <div className ='my-10'>
        <div className ='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
            <p className ='onest-norm w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-200'>
            This is the latest collection 
            </p>
        </div>
        {/*Rendering products */}
        <div className ='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestProducts.map((items,index)=>(
                    <ProductsItem key={index} id={items._id} image={items.image} name ={items.name} price ={items.price}/>
                ))
            }
        
        </div>
    </div>
  )
}

export default LatestCollection
