import Link from 'next/link';
import React from 'react'
import { FcGoogle } from "react-icons/fc";

const Login = () => {
   return (
      <div className='theme-container min-h-screen'>
         <div className="flex flex-wrap">
            <div className="w-7/12"></div>
            <div className="w-5/12">
               <div className="">
                  <div className="bg-gray-50 flex items-center justify-center flex-nowrap gap-5 py-2 rounded-md">
                     <FcGoogle />
                     <p>Continue With Google</p>
                  </div>
                  <div className="my-5 relative w-full text-center before:absolute before:border-b-2 before:border-slate-100 before:w-full before:right-0 before:top-[10px] before:-z-10">
                     <span className='bg-white text-sm text-gray-500 px-3'>OR</span>
                  </div>
                  <form className=''>
                     <fieldset className='mb-4'>
                        <label htmlFor="" className='text-sm text-gray-500'>Email</label>
                        <input type="text" name="" id="" className='w-full h-10 text-base border border-slate-200 focus:outline-0 rounded-md p-4' />
                     </fieldset>
                     <fieldset className='mb-2'>
                        <label htmlFor="">Password</label>
                        <input type="text" name="" id="" className='w-full h-10 text-base border border-slate-200 focus:outline-0 rounded-md p-4' />
                     </fieldset>
                     <div className="mb-12">
                        <Link href='/' className='text-sm text-indigo-400 float-end'>Forget password ?</Link>
                     </div>
                     <button type="submit" className='w-full bg-indigo-400 text-white text-base text-center rounded-md py-2'>Login</button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Login