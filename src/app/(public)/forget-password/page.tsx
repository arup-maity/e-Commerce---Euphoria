'use client'
import { authInstance } from '@/config/axios'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import React, { useState } from 'react'

const ForgetPassword = () => {
   const searchParams = useSearchParams()
   const type = searchParams.get('type')
   const [email, setEmail] = useState('')

   if (type === null || type === undefined || type === '') {
      notFound()
   }

   async function sendLink() {
      try {
         const response = await authInstance.post(`/forget-password`, { email, type })
         console.log('response', response)
      } catch (error) {
         console.log('error', error)
      }
   }

   return (
      <div className='w-full p-4'>
         <div className="flex flex-wrap -m-4">
            <div className="w-full lg:w-7/12 flex items-center justify-center p-4">
               <div className="w-6/12 lg:w-11/12">
                  <Image src='/forget-password.svg' alt='' width={200} height={200} className='w-full h-full' />
               </div>
            </div>
            <div className="w-full lg:w-4/12 flex items-center p-4">
               <div className="w-full">
                  <div className="w-full text-2xl font-semibold mb-2">Forget Your Password</div>
                  <p className='text-sm text-gray-500'>Enter your email and we&apos;ll send you a link to reset your password.</p>
                  <p className='text-sm text-gray-500 mb-5'>Please  check it.</p>
                  <div className='space-y-4'>
                     <fieldset>
                        <input type="email" name="" id="" className="bg-transparent h-10 w-full text-base font-lato border border-slate-400 rounded p-3" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                     </fieldset>
                     <div className="">
                        <button type='submit' className='w-full bg-indigo-500 text-sm text-white border border-indigo-500 rounded py-2' onClick={sendLink}>Send</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ForgetPassword