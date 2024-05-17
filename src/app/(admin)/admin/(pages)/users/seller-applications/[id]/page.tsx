'use client'
import { adminInstance } from '@/config/axios'
import React, { useLayoutEffect, useState } from 'react'

const SellerDetails = ({ params }: { params: { id: string } }) => {
   const id = params['id']

   const [sellerDetails, setSellerDetails] = useState({})
   const [showComment, setShowComment] = useState(false)

   useLayoutEffect(() => {
      getApplicationDetails()
   }, [id])
   async function getApplicationDetails() {
      try {
         const { data } = await adminInstance.get(`/user/read-seller-applications/${id}`)
         if (data.success) {
            setSellerDetails(data.seller)
         }
      } catch (error) {
         console.log('Failed to get application details', error)
      }
   }

   return (
      <div className='bg-white rounded p-4'>
         <div className="grid gap-2 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
               <div className="">
                  <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>Full Name</label>
               </div>
               <div className="md:col-span-3 w-full text-base">
                  <b className='me-2'>:</b>
                  <span>{sellerDetails?.fullName}</span>
               </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
               <div className="">
                  <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>Email</label>
               </div>
               <div className="md:col-span-3 w-full text-base">
                  <b className='me-2'>:</b>
                  <span>{sellerDetails?.email}</span>
                  <span className='ms-4'>{sellerDetails?.emailVerified ? '(verify)' : '(Not verify)'}</span>
               </div>
            </div>
         </div>
         {
            showComment &&
            <div className="grid mb-4">
               <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
                  <div className="">
                     <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>Comment</label>
                  </div>
                  <div className="md:col-span-3 w-full text-base">
                     <textarea rows={5} className='w-full border rounded' />
                  </div>
               </div>
            </div>
         }
         {
            !showComment &&
            <div className="flex items-center gap-2">
               <button className='text-sm bg-indigo-500 text-white border border-indigo-500 rounded py-2 px-6'>Approve</button>
               <button className='text-sm bg-red-500 text-white border border-red-500 rounded py-2 px-6' onClick={() => setShowComment(prev => !prev)}>Rejected</button>
            </div>
         }
         {
            showComment &&
            <div className="flex items-center gap-2">
               <button className='text-sm bg-red-500 text-white border border-red-500 rounded py-2 px-6'>Rejected</button>
               <button className='text-sm bg-gray-300 text-gray-600 border border-gray-300 rounded py-2 px-6' onClick={() => setShowComment(prev => !prev)}>Cancel</button>
            </div>
         }
      </div>
   )
}

export default SellerDetails