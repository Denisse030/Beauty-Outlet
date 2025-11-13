import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
  return (
    <div className='bg-[radial-gradient(circle_at_top_left,#ffeaf5,#fff)] border border-[#fab5ef] rounded py-12 text-center'>
        <div className='max-w-2xl mx-auto px-6'>
            <p className='text-3xl font-medium text-gray-800'>Stay in the Glow ✨</p>
            <p className='text-gray-600 mt-2'>Subscribe and get 25% off your next purchase.</p>
            <form onSubmit={onSubmitHandler} className='w-full sm:w-3/4 flex items-center gap-3 mx-auto mt-6 border border-pink-300 rounded-full pl-4 pr-2 py-2 bg-white shadow-sm'>
            <input className='flex-1 outline-none bg-transparent text-sm px-2' type='email' placeholder='Enter your email' required/>
            <button type='submit' className='bg-[#f47be0] text-white text-sm px-8 py-2 rounded-full hover:bg-[#e063c9] transition'>Subscribe</button>
            </form>
        </div>
    </div>
    )
}

export default NewsletterBox

