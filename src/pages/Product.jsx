import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState();

  const fetchProductData = async () => {

    products.map((item)=>{
      if(item._id === productId){
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    })
  }

  useEffect(()=>{
    fetchProductData();
  },[productId,products])
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/*Product Data */}
      <div className ='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* Product Images */}
        <div className ='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className ='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
          {
            productData.image.map((item,index)=>(
              <img onClick ={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt =""/>
            ))
          }
          </div>
          <div className = 'w-full sm:w-[80%]'>
            <img className ='w-full h-auto' src = {image} alt = "" />
          </div>
        </div>
        {/* Product info */}
        <div className ='flex-1'>
          <h1 className ='onest-norm font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className ='flex items-center gap-1 mt-2'>
            <img src={assets.starIcon} alt ="" className ='w-3 5' />
            <img src={assets.starIcon} alt ="" className ='w-3 5' />
            <img src={assets.starIcon} alt ="" className ='w-3 5' />
            <img src={assets.starIcon} alt ="" className ='w-3 5' />
            <img src={assets.starDullIcon} alt ="" className ='w-3 5' />
            <p className ='onest-norm pl-2'>(122)</p>
          </div>
          <p className = 'onest-thick mt-5 text-3xl'>{currency}{productData.price}</p>
          <p className ='onest-norm mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className ='flex flex-col gap-4 my-8'>
            <p className ='onest-norm'>Select Size</p>
            <div className ='flex gap-2'>
              {productData.sizes.map((item,index)=>(
                <button onClick={()=>setSize(item)}className ={`onest-thick border py-2 px-4 bg-gray-100 ${item === size ? 'border-gray-400' : ''}`} key={index}>{item}</button>
              ))}
            </div>
          </div>
          <button onClick={()=> addToCart(productData._id, size)} className ='onest-thick bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className ='mt-8 sm:w-4/5'/>
          <div className ='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p className ='onest-norm'>Original Product</p>
              <p className ='onest-norm'>Shipping fees apply </p>
              <p className ='onest-norm'>No Returns available for this product</p>
          </div>
        </div>
      </div>
      {/*Description and review section */}
      <div className = 'mt-20'>
        <div className='flex'>
          <b className ='onest-thick border px-5 py-3 text-sm'>Description</b>
          <b className ='onest-norm border px-5 py-3 text-sm'>Reviews (122)</b>
        </div>
        <div className ='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p className = 'onest-norm text-gray-500'>Filler words are going here that need to be replaced later</p>
          <p className = 'onest-norm text-gray-500'>another set of filler words are going here that again need to be replaced later</p>
        </div>
      </div>
      {/*Display related prodcuts */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}></RelatedProducts>
    </div>
  ) :<div className ='opacity-0'></div>
}

export default Product
