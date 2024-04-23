'use client'
import React, { useLayoutEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';

const EmailVerification = () => {
   const searchParams = useSearchParams();
   const token = searchParams.get('token');
   const [loading, setLoading] = useState(true)
   const [validToken, setValidToken] = useState(false)

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
         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/email-verification`, {
            method: 'GET',
            headers: {
               'Authorization': `Bearer ${token}`,
               'Content-Type': 'application/json'
            }
         })
         const data = await res.json()
         console.log(data)
      } catch (error) {

      }
   }

   if (loading) {
      return (
         <div>Loading...</div>
      )
   }
   if (!validToken) {
      return (
         <div>Invalid Token</div>
      )
   }
   return (
      <div className='theme-container'>
         <div className="py-10">
            <div className="text-xl font-lato font-bold mb-5">Email Verification</div>
            <p className='text-base font-lato text-gray-500'>Please verify your email address to complete your registration.</p>
            <div className="mt-10">
               <button className='text-base text-white font-lato bg-blue-500 rounded-md py-1.5 px-5' onClick={verifyEmail}>Verify My Email</button>
            </div>
         </div>
      </div>
   )
}

export default EmailVerification