'use client'
import React, { useLayoutEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const AccountVerification = () => {
   const searchParams = useSearchParams();
   const token = searchParams.get('token');
   const [loading, setLoading] = useState(true)
   const [validToken, setValidToken] = useState(false)
   const [showFeedback, setShowFeedback] = useState(false)

   useLayoutEffect(() => {
      checkToken()
   }, [token])

   async function checkToken() {
      try {
         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/check-token`, {
            method: 'GET',
            headers: {
               'Authorization': `Bearer ${token}`,
               'Content-Type': 'application/json'
            }
         })
         const data = await res.json()
         if (data.success) {
            setValidToken(true)
         }
         console.log(data)
      } finally {
         setLoading(false)
      }
   }

   async function verifyEmail() {
      try {
         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/account-verification`, {
            method: 'PUT',
            headers: {
               'Authorization': `Bearer ${token}`,
               'Content-Type': 'application/json'
            }
         })
         const data = await res.json()
         console.log('verifyEmail', data)
      } catch (error) {
         console.log('error', error)
      }
   }

   // if (loading) {
   //    return (
   //       <div>Loading...</div>
   //    )
   // }
   // if (!validToken) {
   //    return (
   //       <div>Invalid Token</div>
   //    )
   // }
   if (showFeedback) {
      return (
         <div className="theme-container">
            <div className="py-10">
               <div className="text-xl font-lato font-bold mb-5">Your account has been activated successfully.</div>
               <p className='text-base font-lato text-gray-500 mb-4'>Goto your profile page and complete the details. <Link href={`/`} className='text-base text-indigo-500 font-lato'>Click here</Link></p>
            </div>
         </div>
      )
   }
   return (
      <div className='theme-container'>
         <div className="py-10">
            <div className="text-xl font-lato font-bold mb-5">Account Verification</div>
            <p className='text-base font-lato text-gray-500 mb-4'>Please active your account and continue your work.</p>
            <div className="">
               <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>Enter your password</label>
               <input type="text" className='w-full lg:w-6/12 h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4' />
            </div>
            <div className="mt-5">
               <button className='text-base text-white font-lato bg-blue-500 rounded-md py-1.5 px-5' onClick={verifyEmail}>Active My Account</button>
            </div>
         </div>
      </div>
   )
}

export default AccountVerification