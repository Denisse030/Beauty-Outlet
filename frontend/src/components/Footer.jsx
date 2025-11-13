import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div> 
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div className=''>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>Discover Beauty Outlet, where quality meets value to deliver products that care for your skin and elevate your routine. Our curated selection ensures every skin type can enjoy hydration, protection, and a touch of luxury.</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>Get In Touch</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Phone Number: +1 123-456-7890</li>
                    <li>beautyoutlet@beautyoulet.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr className='border-[#fab5ef]'/>
            <p className='py-5 text-sm text-center'>Copyright 2025@ Beauty Outlet - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
