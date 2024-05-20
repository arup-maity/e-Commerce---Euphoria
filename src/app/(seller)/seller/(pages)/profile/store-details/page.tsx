'use client'
import { sellerInstance } from '@/config/axios'
import React, { useLayoutEffect, useState } from 'react'

const StoreDetails = () => {
   const [storeDetails, setStoreDetails] = useState([])
   const [storeAddress, setStoreAddress] = useState([])
   const [pickupAddress, setPickupAddress] = useState([])

   async function getStoreDetails() {
      try {
         const { data } = await sellerInstance.get(`/store/store-details`)
         console.log('store', data)
         if (data.success) {
            setStoreDetails(data.seller.sellersStores)
            setStoreAddress(data.seller.storeAddress)
            setPickupAddress(data.seller.pickupAddress)
         }
      } catch (error) {
         console.log('error', error)
      }
   }

   useLayoutEffect(() => {
      getStoreDetails()
   }, [])

   return (
      <div className='bg-white rounded p-4'>
         <div className="">
            <div className="w-full mb-4">
               {
                  storeDetails?.map((store: any, index) => {
                     return (
                        <div key={index} className="">
                           <div className="grid gap-4">
                              <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
                                 <div className="">
                                    <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>Store Name</label>
                                 </div>
                                 <div className="md:col-span-3 w-full text-base">
                                    {store.storeName}
                                 </div>
                              </div>
                           </div>
                           <div className="grid gap-4">
                              <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
                                 <div className="">
                                    <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>Store Description</label>
                                 </div>
                                 <div className="md:col-span-3 w-full text-base">
                                    {store.description}
                                 </div>
                              </div>
                           </div>
                        </div>
                     )
                  })
               }
            </div>

            <div className="mb-2">Address</div>
            <div className="w-full mb-4">
               {
                  storeAddress?.map((address: any, index) => {
                     return (
                        <div key={index} className="w-6/12 bg-gray-100 rounded p-4">
                           <p className='text-base text-gray-600 font-lato mb-2'>Address : {index + 1}</p>
                           <ul className='*:text-base *:text-gray-500 *:font-lato'>
                              <li>{address.addressLineOne}</li>
                              <li>{address.addressLineTwo}</li>
                              <li><span>{address.city},</span><span className='ms-2'>{address.state}</span></li>
                              <li><span>{address.country},</span><span className='ms-2'>{address.postalCode}</span></li>
                           </ul>
                        </div>
                     )
                  })
               }
            </div>
            <div className="mb-2">Pickup Address</div>
            <div className="w-full">
               {
                  pickupAddress?.map((address: any, index) => {
                     return (
                        <div key={index} className="w-6/12 bg-gray-100 rounded p-4">
                           <p className='text-base text-gray-600 font-lato mb-2'>Address : {index + 1}</p>
                           <ul className='*:text-base *:text-gray-500 *:font-lato'>
                              <li>{address.addressLineOne}</li>
                              <li>{address.addressLineTwo}</li>
                              <li><span>{address.city},</span><span className='ms-2'>{address.state}</span></li>
                              <li><span>{address.country},</span><span className='ms-2'>{address.postalCode}</span></li>
                           </ul>
                        </div>
                     )
                  })
               }
            </div>

         </div>
      </div>
   )
}

export default StoreDetails