import Image from 'next/image'
import React from 'react'

const WishList = () => {
   return (
      <div>
         {/* <p className='text-2xl text-[#3C4242] font-bold font-lato mb-4'>Wishlist</p>
         {Array(4).fill()
            .map((index) => (
               <div key={index} className="">
                  <div className="flex flex-nowrap items-center gap-5">
                     <div className="">
                        X
                     </div>
                     <div className="flex-grow">
                        <div className="flex items-center gap-4">
                           <div className="">
                              <Image src="/img-29.jpg" width="110" height="110" alt="" />
                           </div>
                           <div className="flex-grow">
                              <p className='text-lg text-gray-600 font-medium mb-1'>Blue Flower Print Crop Top </p>
                              <p className='text-sm text-gray-400'>Color : <span>Yellow</span></p>
                           </div>
                           <div className="">
                              <div className="">$29.00</div>
                           </div>
                           <div className="">
                              <button className='text-sm text-white bg-indigo-500 !whitespace-nowrap rounded-md py-2 px-5'>Add to Cart</button>
                           </div>
                        </div>
                     </div>
                  </div>
                  <hr className='my-4' />
               </div>
            ))} */}

         <div className="block border text-center rounded-md space-y-4 p-4">
            <Image src='/icon-1.jpg' width={100} height={100} alt='' className='w-[100px] h-[100px] mx-auto' />
            <p className='text-3xl font-bold'>Your wishlist is empty.</p>
            <p className='w-6/12 mx-auto'>You don’t have any products in the wishlist yet. You will find a lot
               of interesting products on our Shop page.</p>
            <button className='bg-indigo-500 text-white rounded-md py-2 px-5'>Continue Shopping</button>
         </div>
      </div>
   )
}

export default WishList