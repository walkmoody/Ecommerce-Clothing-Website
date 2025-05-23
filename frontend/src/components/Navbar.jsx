import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import {Link, NavLink} from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
    const [visible,setVisible]  = useState(false);
    const {setShowSearch, getCartCount, navigate, token, setToken, setCartItems} = useContext(ShopContext);
 
    const logout = () =>{
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
    }

  return (
    <div className={visible ? '' : 'sticky top-0 z-50'}>
    <div style ={{paddingLeft : '20px', paddingRight: '20px'}}>
    <div className='w-full flex items-center justify-between py-5 font-medium'>
        <Link to='/'><img src={assets.logo} className='w-36' alt="" /></Link>

        <ul className='hidden sm:flex gap-5 text-sm text-gray-100'>
        <NavLink to="/" className="flex flex-col items-center gap-1">
        {({ isActive }) => (<>
                <p className={isActive ? "rock-salt-regular" : "onest-norm"}>HOME</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-100 hidden" /></>
            )}
            </NavLink>
            <NavLink to='/collection'className ='flex flex-col items-center gap-1'>
            {({ isActive }) => (<>
                <p className={isActive ? "rock-salt-regular" : "onest-norm"}>COLLECTION</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-100 hidden" /></>
            )}
            </NavLink>
            <NavLink to='/about' className ='flex flex-col items-center gap-1'>
            {({ isActive }) => (<>
                <p className={isActive ? "rock-salt-regular" : "onest-norm"}>ABOUT</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-100 hidden" /></>
            )}
            </NavLink>
            <NavLink to='/contact'className ='flex flex-col items-center gap-1'>
            {({ isActive }) => (<>
                <p className={isActive ? "rock-salt-regular" : "onest-norm"}>CONTACT</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-100 hidden" /></>
            )}
            </NavLink>
        </ul>
        <div className ='flex items-center gap-6'>
            <Link to='/collection'><img onClick={()=>setShowSearch(true)} src = {assets.search} className = 'w-5 cursor-pointer' alt = ""/></Link>
            <div className = "group relative">
                <img onClick={()=> token ? null : navigate('/login')} className ='w-5 cursor-pointer' src={assets.profileIcon} alt=""/>
                {/*Dropdown men*/}
                {token && 
                <div className="group-hover:block dropdown-menu hidden absolute left-1/2 transform -translate-x-1/2 pt-4 z-50">
                    <div className = 'flex flex-col gap-2 w-36 py-3 px-5 bg-black text-gray-400 border border-gray-100 rounded shadow-lg'>
                        <p className = 'onest-norm cursor-pointer hover:text-white'>My Profile</p>
                        <p onClick = {()=>navigate('/orders')}className = 'onest-norm cursor-pointer hover:text-white'>Orders</p>
                        <p onClick={logout} className = 'onest-norm cursor-pointer hover:text-white'>Logout</p>
                    </div>
                </div>}
            </div>
            <Link to='/cart' className='relative'>
                <img src={assets.cartIcon} className='w-5 min-w-5' alt=""/>
                <p className = 'onest-thick absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
            </Link>
            <img onClick={()=>setVisible(true)} src={assets.menuIcon} className = 'w-5 cursor-pointer sm:hidden' alt = ""/>
        </div>

        {/* sidebar menu for small screens */}
        <div className ={`absolute top-0 right-0 bottom-0 overflow-hidden bg-black transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-100'>
                <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                    <img className='h-4 rotate-180 'src={assets.dropdownIcon} alt=""/>
                    <p className = 'onest-norm'>BACK</p>
                </div>
                <NavLink onClick={()=>setVisible(false)} 
                    className ={({ isActive }) => `py-2 pl-6 border ${isActive ? 'onest-thick bg-black text-white' : 'onest-norm'}`} 
                    to='/'>HOME</NavLink>
                <NavLink onClick={()=>setVisible(false)} 
                    className ={({ isActive }) => `py-2 pl-6 border ${isActive ? 'onest-thick bg-black text-white' : 'onest-norm'}`} 
                    to='/collection'>COLLECTION</NavLink>
                <NavLink onClick={()=>setVisible(false)} 
                    className ={({ isActive }) => `py-2 pl-6 border ${isActive ? 'onest-thick bg-black text-white' : 'onest-norm'}`}
                    to='/about'>ABOUT</NavLink>
                <NavLink onClick={()=>setVisible(false)} 
                    className ={({ isActive }) => `py-2 pl-6 border ${isActive ? 'onest-thick bg-black text-white' : 'onest-norm'}`} 
                    to='/contact'>CONTACT</NavLink>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Navbar
