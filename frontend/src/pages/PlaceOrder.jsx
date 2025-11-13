import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
    const [method, setMethod] =useState('cud');
    const {navigate} = useContext(ShopContext);
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t border-[#fab5ef] '>
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3 '>
            <Title text1={'Delivery'} text2={'Information'} />
        </div>
        <div className='flex gap-3'>
            <input className='border border-gray rounded py-1.5 px-3.5 w-full bg-[radial-gradient(circle_at_top_left,#ffeaf5,#fff)]' type='text' placeholder='First Name' />
            <input className='border border-gray rounded py-1.5 px-3.5 w-full bg-[radial-gradient(circle_at_top_left,#ffeaf5,#fff)]' type='text' placeholder='Last Name' />
        </div>
        <div className='flex gap-3'>
            <input className='border border-gray rounded py-1.5 px-3.5 w-full bg-[radial-gradient(circle_at_top_left,#ffeaf5,#fff)]' type='email' placeholder='Enter your Email' />
            <input className='border border-gray rounded py-1.5 px-3.5 w-full bg-[radial-gradient(circle_at_top_left,#ffeaf5,#fff)]' type='text' placeholder='Street Address' />
        </div>
        <div className='flex gap-3'>
            <input className='border border-gray rounded py-1.5 px-3.5 w-full bg-[radial-gradient(circle_at_top_left,#ffeaf5,#fff)]' type='text' placeholder='City' />
            <input className='border border-gray rounded py-1.5 px-3.5 w-full bg-[radial-gradient(circle_at_top_left,#ffeaf5,#fff)]' type='text' placeholder='State' />
        </div>
       <div className='flex gap-3'>
            <input className='border border-gray rounded py-1.5 px-3.5 w-full bg-[radial-gradient(circle_at_top_left,#ffeaf5,#fff)]' type='number' placeholder='Zip Code' />
            <input className='border border-gray rounded py-1.5 px-3.5 w-full bg-[radial-gradient(circle_at_top_left,#ffeaf5,#fff)]' type='country' placeholder='Country' />
        </div>
            <input className='border border-gray rounded py-1.5 px-3.5 w-full bg-[radial-gradient(circle_at_top_left,#ffeaf5,#fff)]' type='number' placeholder='Phone Number' />  
        </div>
      <div className='mt-8'>
            <div className='mt-12 w-full min-w-sm mx-auto sm:mx-0'>
                <CartTotal />
            </div>
            <div className='mt-12'>
                <Title text1={'Payment'} text2={'Method'}/>
                <div className='flex gap-2 flex-col lg:flex-row'>
                    <div onClick={() => setMethod('stripe')} className='flex items-center gap-2 p-2 px-1 cursor-pointer bg-[radial-gradient(circle_at_top_left,#ffeaf5,#fff)] border border-[#fab5ef] rounded'>
                        <p className={`min-w-3.5 h-3.5 border rounded-full border-[#f870e2] ${method === 'stripe' ? 'bg-[#f526d2]' : ''}`}></p>
                        <img className='h-5 mx-4' src={assets.stripe_logo} alt='' />
                    </div>
                    <div onClick={() => setMethod('razorpay')} className='flex items-center gap-2 p-2 px-1 cursor-pointer bg-[radial-gradient(circle_at_top_left,#ffeaf5,#fff)] border border-[#fab5ef] rounded'>
                        <p className={`min-w-3.5 h-3.5 border rounded-full border-[#f870e2] ${method === 'razorpay' ? 'bg-[#f526d2]' : ''}`}></p>
                        <img className='h-5 mx-4' src={assets.razorpay_logo} alt='' />
                    </div>
                    <div onClick={() => setMethod('zelle')} className='flex items-center gap-2 p-2 px-1 cursor-pointer bg-[radial-gradient(circle_at_top_left,#ffeaf5,#fff)] border border-[#fab5ef] rounded'>
                        <p className={`min-w-3.5 h-3.5 border rounded-full border-[#f870e2] ${method === 'zelle' ? 'bg-[#f526d2]' : ''}`}></p>
                        <img className='h-5 mx-4' src={assets.zelle_logo} alt='' />
                    </div>
                    <div onClick={() => setMethod('cud')} className='flex items-center gap-2 p-2 px-1 cursor-pointer bg-[radial-gradient(circle_at_top_left,#ffeaf5,#fff)] border border-[#fab5ef] rounded'>
                        <p className={`min-w-3.5 h-3.5 border rounded-full border-[#f870e2] ${method === 'cud' ? 'bg-[#f526d2]' : ''}`}></p>
                        <p className='text-gray text-sm font-medium mx-2'>Cash Upon Delivery</p>
                    </div>
                </div>
                <div className='w-full text-end mt-8'>
                    <button onClick={() => navigate('/orders')} className= 'bg-[#fe96eb] border border-[#fab5ef] rounded text-black text-sm my-8 px-8 py-3'>Place your Order</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlaceOrder
