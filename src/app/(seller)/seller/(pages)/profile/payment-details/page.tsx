'use client'
import React, { useLayoutEffect, useState } from 'react'
import { sellerInstance } from '@/config/axios'

const PaymentDetails = () => {
   const [paymentDetails, setPaymentDetails] = useState([])

   useLayoutEffect(() => {
      getPaymentDetails()
   }, [])
   async function getPaymentDetails() {
      try {
         const { data } = await sellerInstance.get('/store/payment-details')
         console.log('payment', data)
         if (data.success) {
            setPaymentDetails(data.seller.paymentDetails)
         }
      } catch (err) {
         console.log(err)
      }
   }
   return (
      <div className='bg-white rounded p-4'>
         <div className="mb-4">Bank Details</div>
         <div className="">
            {
               paymentDetails?.map((account: any, index) => {
                  return (
                     <div key={index} className="">
                        <div className="grid gap-4">
                           <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
                              <div className="">
                                 <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>Account Name</label>
                              </div>
                              <div className="md:col-span-3 w-full text-base">
                                 {account.accountName}
                              </div>
                           </div>
                        </div>
                        <div className="grid gap-4">
                           <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
                              <div className="">
                                 <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>Account Number</label>
                              </div>
                              <div className="md:col-span-3 w-full text-base">
                                 {account.accountNumber}
                              </div>
                           </div>
                        </div>
                        <div className="grid gap-4">
                           <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
                              <div className="">
                                 <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>Bank Name</label>
                              </div>
                              <div className="md:col-span-3 w-full text-base">
                                 {account.bankName}
                              </div>
                           </div>
                        </div>
                        <div className="grid gap-4">
                           <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
                              <div className="">
                                 <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>IFSC Code</label>
                              </div>
                              <div className="md:col-span-3 w-full text-base">
                                 {account.ifscCode}
                              </div>
                           </div>
                        </div>
                     </div>
                  )
               })
            }
         </div>
      </div>
   )
}

export default PaymentDetails