import Image from 'next/image'
import React from 'react'

const Order = () => {
   return (
      <>
         <p className='text-2xl text-[#3C4242] font-bold font-lato mb-4'>My Orders</p>
         <ul className='flex flex-nowrap justify-between border-b-2 border-slate-100 mb-5'>
            <li className='bg-[#F6F6F6] w-44 text-base text-center rounded-t-md py-1.5'>Active</li>
            <li className='w-44 text-base text-center rounded-t-md py-1.5'>Cancelled</li>
            <li className='w-44 text-base text-center rounded-t-md py-1.5'>Completed</li>
         </ul>
         <div className="">
            <div className="bg-[#F6F6F6] rounded-md p-5 mb-4">
               <p className='mb-2'>Order no: #123456789</p>
               <div className="flex flex-wrap justify-between">
                  <div className="*:text-sm *:text-gray-500">
                     <p>Order Date : 2 June 2023 2:40 PM</p>
                     <p>Estimated Delivery Date : 8 June 2023</p>
                  </div>
                  <div className="*:text-sm *:text-gray-500">
                     <p>Order Status : Inprogress</p>
                     <p>Payment Method : Cash on delivery</p>
                  </div>
               </div>
            </div>
            <div className="flex gap-5">
               <Image src='/img-29.jpg' width={100} height={100} alt='' />
               <div className="flex flex-grow flex-wrap items-center gap-4">
                  <div className="flex-grow">
                     <p className='text-lg text-gray-600 font-medium mb-1'>Blue Flower Print Crop Top </p>
                     <p className='text-sm text-gray-400'>Color : <span>Yellow</span></p>
                     <p className='text-sm text-gray-400'>Qty : <span>2</span></p>
                     <p className='text-sm text-gray-400'>Total : <span>$58.00</span></p>
                  </div>
                  <div className="">
                     <button className='text-sm text-white bg-indigo-500 !whitespace-nowrap rounded-md py-2 px-5'>
                        View Detail
                     </button>
                  </div>
               </div>
            </div>
            <hr className='my-4' />
         </div>
         <div className="">
            <div className="bg-[#F6F6F6] rounded-md p-5 mb-4">
               <p className='mb-2'>Order no: #123456789</p>
               <div className="flex flex-wrap justify-between">
                  <div className="*:text-sm *:text-gray-500">
                     <p>Order Date : 2 June 2023 2:40 PM</p>
                     <p>Estimated Delivery Date : 8 June 2023</p>
                  </div>
                  <div className="*:text-sm *:text-gray-500">
                     <p>Order Status : Inprogress</p>
                     <p>Payment Method : Cash on delivery</p>
                  </div>
               </div>
            </div>
            <div className="flex gap-5">
               <Image src='/img-29.jpg' width={100} height={100} alt='' />
               <div className="flex flex-grow flex-wrap items-center gap-4">
                  <div className="flex-grow">
                     <p className='text-lg text-gray-600 font-medium mb-1'>Blue Flower Print Crop Top </p>
                     <p className='text-sm text-gray-400'>Color : <span>Yellow</span></p>
                     <p className='text-sm text-gray-400'>Qty : <span>2</span></p>
                     <p className='text-sm text-gray-400'>Total : <span>$58.00</span></p>
                  </div>
                  <div className="">
                     <button className='text-sm text-white bg-indigo-500 !whitespace-nowrap rounded-md py-2 px-5'>
                        View Detail
                     </button>
                  </div>
               </div>
            </div>
            <hr className='my-4' />
            <div className="flex gap-5">
               <Image src='/img-29.jpg' width={100} height={100} alt='' />
               <div className="flex flex-grow flex-wrap items-center gap-4">
                  <div className="flex-grow">
                     <p className='text-lg text-gray-600 font-medium mb-1'>Blue Flower Print Crop Top </p>
                     <p className='text-sm text-gray-400'>Color : <span>Yellow</span></p>
                     <p className='text-sm text-gray-400'>Qty : <span>2</span></p>
                     <p className='text-sm text-gray-400'>Total : <span>$58.00</span></p>
                  </div>
                  <div className="">
                     <button className='text-sm text-white bg-indigo-500 !whitespace-nowrap rounded-md py-2 px-5'>
                        View Detail
                     </button>
                  </div>
               </div>
            </div>
            <hr className='my-4' />
         </div>
         <div className="">
            <div className="bg-[#F6F6F6] rounded-md p-5 mb-4">
               <p className='mb-2'>Order no: #123456789</p>
               <div className="flex flex-wrap justify-between">
                  <div className="*:text-sm *:text-gray-500">
                     <p>Order Date : 2 June 2023 2:40 PM</p>
                     <p>Estimated Delivery Date : 8 June 2023</p>
                  </div>
                  <div className="*:text-sm *:text-gray-500">
                     <p>Order Status : Inprogress</p>
                     <p>Payment Method : Cash on delivery</p>
                  </div>
               </div>
            </div>
            <div className="flex gap-5">
               <Image src='/img-29.jpg' width={100} height={100} alt='' />
               <div className="flex flex-grow flex-wrap items-center gap-4">
                  <div className="flex-grow">
                     <p className='text-lg text-gray-600 font-medium mb-1'>Blue Flower Print Crop Top </p>
                     <p className='text-sm text-gray-400'>Color : <span>Yellow</span></p>
                     <p className='text-sm text-gray-400'>Qty : <span>2</span></p>
                     <p className='text-sm text-gray-400'>Total : <span>$58.00</span></p>
                  </div>
                  <div className="">
                     <button className='text-sm text-white bg-indigo-500 !whitespace-nowrap rounded-md py-2 px-5'>
                        View Detail
                     </button>
                  </div>
               </div>
            </div>
            <hr className='my-4' />
         </div>
      </>
   )
}

export default Order