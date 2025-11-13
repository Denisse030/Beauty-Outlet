import React, { useState } from 'react'

const Login = () => {
    const [currentState, setCurrentState] = useState('Sign Up');
    const onSubmitHandler = async (event) => {
        event.preventDefault();
    }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-20 gap-4 text-gray-700 bg-[radial-gradient(circle_at_top_left,#ffeaf5,#fff)] border border-[#fab5ef] rounded-2xl shadow-md p-8 pt-4'>
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
            <p className='lustria-regular text-3xl'>{currentState}</p>
            <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
        </div>
        {currentState === 'Login' ? '' : <input type="text" className='w-full px-3 py-2 border border-[#fb83e5] rounded' placeholder='Name' required/>}
        <input type="email" className='w-full px-3 py-2 border border-[#fb83e5] rounded' placeholder='Email' required/>
        <input type="password" className='w-full px-3 py-2 border border-[#fb83e5] rounded' placeholder='Password' required/>
        <div className='w-full flex justify-between text-sm -mt-2'>
            <p className='cursor-pointer'>Forgot your Password?</p>
            {
                currentState === 'Login' ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create your Account</p> : <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
            }
        </div>
        <button className='bg-[#fe96eb] border border-[#fab5ef] rounded text-black font-light px-8 py-2 mt-4 cursor-pointer'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login
