import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const {setShowSearch, getCartCount} = useContext(ShopContext);
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to='/'><img src={assets.logo} alt="" className='w-36 '/></Link>
      <ul className='hidden sm:flex gap-6 text-[15px] font-medium'>
        {[
            { name: 'Home', path: '/' },
            { name: 'Collection', path: '/collection' },
            { name: 'About', path: '/about' },
            { name: 'Contact', path: '/contact' }
        ].map((link, i) => (
        <NavLink key={i} to={link.path} className={({ isActive }) => `px-3 py-1 rounded-full transition-all duration-200 ${isActive ? 'bg-[#f47be0]/20 text-[#6d3163]' : 'hover:bg-[#f47be0]/10 hover:text-[#6f2362] text-gray-700'}`}>{link.name}</NavLink>
        ))}
        </ul>
      <div className='flex items-center gap-6'>
        <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer'/>
        <div className='group relative'>
            <Link to='/login'><img className='w-5 cursor-pointer' src={assets.profile_icon} alt=''/></Link>
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-[#FFE0FA] text-gray-500 rounded'>
                    <p className='cursor-pointer hover:text-black'>My Profile</p>
                    <p className='cursor-pointer hover:text-black'>Orders</p>
                    <p className='cursor-pointer hover:text-black'>Logout</p>
                </div>
            </div>
        </div>
        <Link to='/cart' className='relative'>
            <img src={assets.cart_icon} className='w-5 min-w-5 cursor-pointer'/>
            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
        </Link>
        <img onClick={()=> setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden'/>
      </div>

        {/* Sidebar Menu for Moblie Screens */} 
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full ':'w-0' }`}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                    <img src={assets.dropdown_icon} alt="" className='h-4 rotate-180 '/>
                    <p>Back</p>
                </div>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border border-[#db77ca]' to='/'>Home</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border border-[#db77ca]' to='/collection'>Collection</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border border-[#db77ca]' to='/about'>About</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border border-[#db77ca]' to='/contact'>Contact</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar
