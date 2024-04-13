import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
    const [isSignInForm,setIsSignInForm] = useState(true);
    const handleToggleSignUp = () => {
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
        <Header/>
        <div>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_small.jpg'
            alt="background"
            className='absolute'/>
        </div>
        <form className='absolute px-16 py-12 max-w-md bg-black my-40 mx-auto right-0 left-0 text-white rounded-md bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input className='w-full p-3 my-2 rounded-md bg-gray-500 bg-opacity-50 border-[0.1px] border-solid border-slate-200' type='text' placeholder='Name'/>}
            <input className='w-full p-3 my-2 rounded-md bg-gray-500 bg-opacity-50 border-[0.1px] border-solid border-slate-200' type='text' placeholder='Email Address'/>
            <input className='w-full p-3 my-2 rounded-md bg-gray-500 bg-opacity-50 border-[0.1px] border-solid border-slate-200' type='Password' placeholder='Password'/>
            {!isSignInForm && <input className='w-full p-3 my-2 rounded-md bg-gray-500 bg-opacity-50 border-[0.1px] border-solid border-slate-200' type='Password' placeholder='Confirm Password'/>}
            <button className='text-center py-2 my-4 bg-red-700 w-full rounded-md'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p onClick={handleToggleSignUp}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already a user? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login;