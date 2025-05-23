import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductsItem from '../components/ProductsItem';

const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts,setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    if(category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e) =>{
    if (subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }
  
  const applyFilter = () =>{

    let productsCopy = products.slice();

    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if(subCategory.length > 0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);

  }

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch(sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
        break;
      default:
        applyFilter();
        break;
    }

  }

  useEffect(()=>{
    applyFilter();
  }, [category, subCategory,search,showSearch, products])

  useEffect(()=>{
    sortProduct();
  },[sortType])

  return (
    <div className ='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      {/* Filter Options */}
      <div className ='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className ='onest-norm my-2 text-xl flex items-center text-white cursor-pointer gap-2'>FILTERS
          <img className = {`h-3 sm:hidden ${showFilter ? 'rotate-90':''}`} src={assets.dropdownIcon} alt=""/>
        </p>
        {/* Category Filter */}
        <div className ={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '': 'hidden'} sm:block rounded`}>
          <p className= 'onest-thick text-white mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className ='flex flex-col gap-2 text-sm font-light text-gray-100'>
            <p className='onest-norm flex gap-2'>
              <input className ='w-3' type="checkbox" value ={'Men'} onChange={toggleCategory}/>Men
            </p>
            <p className='onest-norm flex gap-2'>
              <input className ='w-3' type="checkbox" value ={'Women'} onChange={toggleCategory}/>Women
            </p>
            <p className='onest-norm flex gap-2'>
              <input className ='w-3' type="checkbox" value ={'Kids'} onChange={toggleCategory}/>Kids
            </p>
          </div>
        </div>
        {/*SubCategory Filter */}
        <div className ={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '': 'hidden'} sm:block rounded`}>
          <p className= 'onest-thick mb-3 text-sm font-medium text-white'>TYPE</p>
          <div className ='flex flex-col gap-2 text-sm font-light text-gray-100'>
            <p className='onest-norm flex gap-2'>
              <input className ='w-3' type="checkbox" value ={'Shirts'} onChange={toggleSubCategory}/>Shirts
            </p>
            <p className='onest-norm flex gap-2'>
              <input className ='w-3' type="checkbox" value ={'Hoodies'} onChange={toggleSubCategory}/>Hoodies
            </p>
            <p className='onest-norm flex gap-2'>
              <input className ='w-3' type="checkbox" value ={'Winterwear'} onChange={toggleSubCategory}/>Winterwear
            </p>
            <p className='onest-norm flex gap-2'>
              <input className ='w-3' type="checkbox" value ={'Outerwear'} onChange={toggleSubCategory}/>Outerwear
            </p>
          </div>
        </div> 
      </div>
      {/* Right Side */}
      <div className ='flex-1'>
          <div className ='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={'ALL'} text2={'COLLECTIONS'} />
            {/* Product Sort */}
            <select onChange ={(e)=>setSortType(e.target.value)}
            className ='onest-norm border-2 border-gray-300 text-white bg-black text-sm px-2 rounded w-auto min-w-[150px] max-w-[200px] md:max-w-xs lg:max-w-sm'>
              <option className='onest-norm' value="relevent">Sort by: Relevent</option>
              <option className='onest-norm' value="low-high">Sort by: Low to High</option>
              <option className='onest-norm' value="high=low">Sort by: High to Low</option>
            </select>
          </div>
          {/*Map Products */}
          <div className = 'grid grid-cols-2 md:grod-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {
              filterProducts.map((item,index)=>(
                <ProductsItem key={index} name={item.name} id={item._id} price ={item.price} image={item.image}/>
              ))
            }
          </div>
      </div>
    </div>
  )
}

export default Collection
