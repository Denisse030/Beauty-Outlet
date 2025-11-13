import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div className="flex justify-center items-center mt-10">
            <div className="w-52 h-50 rounded-full bg-[radial-gradient(circle_at_top_left,#ffeaf5,#fff)] shadow-md flex flex-col items-center justify-center text-center p-5 transition-transform hover:scale-105 border border-[#fab5ef]">
                <img src={assets.support_img} className="w-12 mb-3" alt="Customer Support Icon" />
                <p className="font-semibold text-gray-800">Best Customer Support</p>
                <p className="text-gray-500 text-sm">We provide 24/7 customer support.</p>
            </div>
        </div>
        <div className="flex justify-center items-center mt-10">
            <div className="w-52 h-50 rounded-full bg-[radial-gradient(circle_at_top_left,#ffeaf5,#fff)] shadow-md flex flex-col items-center justify-center text-center p-5 transition-transform hover:scale-105 border border-[#fab5ef]">
                <img src={assets.exchange_icon} className="w-12 mb-3" alt="Exchange Icon" />
                <p className="font-semibold text-gray-800">Easy Exchange Policy</p>
                <p className="text-gray-500 text-sm">We offer easy and free exchange policy.</p>
            </div>
        </div>
        <div className="flex justify-center items-center mt-10">
            <div className="w-52 h-50 rounded-full bg-[radial-gradient(circle_at_top_left,#ffeaf5,#fff)] shadow-md flex flex-col items-center justify-center text-center p-5 transition-transform hover:scale-105 border border-[#fab5ef]">
                <img src={assets.quality_icon} className="w-12 mb-3" alt="Quality Icon" />
                <p className="font-semibold text-gray-800">7 Days Return Policy</p>
                <p className="text-gray-500 text-sm">We provide a 7-day free return policy.</p>
            </div>
        </div>
    </div>
  )
}

export default OurPolicy
