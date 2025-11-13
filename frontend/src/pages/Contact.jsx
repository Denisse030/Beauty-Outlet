import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='pt-10 border-t border-[#fab5ef]'> 
    <div className='text-3xl pt-5 text-center'> 
      <Title text1={'Contact'} text2={'Us'}/> 
    </div> 
    <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'> 
      <img className='"w-full md:max-w-[450px] rounded-lg shadow-md"' src={assets.contact_img} alt='' /> 
        <div className='flex flex-col justify-center items-start gap-6'> 
          <p className='font-semibold text-xl'>We are Located</p> 
          <p className='text-gray-500'>123 w 45th St <br /> Suite 678, NY, USA </p> 
          <p className='text-gray-500'>Call Us: 123-456-7890 <br /> Email Us: beautyoutlet@beautyoulet.com</p> 
          <p className='font-semibold text-xl'>Follow Us on Social Media</p> 
          <div className='flex flex-col gap-1 text-gray-600'>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='hover:text-pink-500'>Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='hover:text-pink-500'>Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='hover:text-pink-500'>Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='hover:text-pink-500'>LinkedIn</a>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Contact
