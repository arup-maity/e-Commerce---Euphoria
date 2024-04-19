import React from 'react'

const Order = () => {
   return (
      <div>
         <p className='text-2xl text-[#3C4242] font-bold font-lato mb-4'>My Orders</p>
         <ul className='flex flex-nowrap justify-between'>
            <li>Active</li>
            <li>Cancelled</li>
            <li>Completed</li>
         </ul>
      </div>
   )
}

export default Order