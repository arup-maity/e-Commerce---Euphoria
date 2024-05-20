'use client'
import { sellerInstance } from '@/config/axios'
import React, { useLayoutEffect, useState } from 'react'

const Profile = () => {
   const [profileDetails, setProfileDetails] = useState({})
   useLayoutEffect(() => {
      getProfile()
   }, [])
   async function getProfile() {
      try {
         const { data } = await sellerInstance.get(`/profile`)
         console.log('profile', data)
         if (data.success) {
            setProfileDetails(data.profile)
         }
      } catch (error) {
         console.log('error', error)
      }
   }

   return (
      <div className='w-full bg-white rounded p-4'>
         <div className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
               <div className='block text-base text-gray-500 font-lato mb-2'>Full Name</div>
               <div className="md:col-span-3 w-full text-base">
                  {profileDetails.fullName}
               </div>
            </div>
         </div>
         <div className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
               <div className='block text-base text-gray-500 font-lato mb-2'>Display Name</div>
               <div className="md:col-span-3 w-full text-base">
                  {profileDetails.displayName}
               </div>
            </div>
         </div>
         <div className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
               <div className='block text-base text-gray-500 font-lato mb-2'>Email</div>
               <div className="md:col-span-3 w-full text-base">
                  {profileDetails.email}
               </div>
            </div>
         </div>
         <div className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
               <div className='block text-base text-gray-500 font-lato mb-2'>Status</div>
               <div className="md:col-span-3 w-full text-base">
                  {profileDetails.status}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Profile