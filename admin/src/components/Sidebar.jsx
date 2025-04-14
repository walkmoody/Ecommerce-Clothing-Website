import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div>
        <div>
            <NavLink className = 'flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' to ="/add">
                <img src = {assets.addIcon} alt = ""/>
                <p className='hidden md:block'>Add Items</p>
            </NavLink>
        </div>
      
    </div>
  )
}

export default Sidebar
