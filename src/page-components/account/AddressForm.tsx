import Link from 'next/link'
import React from 'react'

const AddressForm = () => {
   return (
      <div>
         <p className='text-2xl text-[#3C4242] font-bold font-lato mb-4'>My Info</p>
         <p className='text-xl text-[#3C4242] font-lato font-bold mb-4'>Add Address</p>
         <div className="w-full flex flex-wrap -m-2">
            <div className="w-6/12 p-2">
               <fieldset>
                  <label htmlFor="" className="block text-sm mb-1">First Name*</label>
                  <input type="text" name="" id="" className="bg-[#F6F6F6] text-base h-11 w-full rounded-md p-3" placeholder="First Name" />
               </fieldset>
            </div>
            <div className="w-6/12 p-2">
               <fieldset>
                  <label htmlFor="" className="block text-sm mb-1">Last Name*</label>
                  <input type="text" name="" id="" className="bg-[#F6F6F6] text-base h-11 w-full rounded-md p-3" placeholder="Last Name" />
               </fieldset>
            </div>
            <div className="w-6/12 p-2">
               <fieldset>
                  <label htmlFor="" className="block text-sm mb-1">Email*</label>
                  <input type="text" name="" id="" className="bg-[#F6F6F6] text-base h-11 w-full rounded-md p-3" placeholder="Email" />
               </fieldset>
            </div>
            <div className="w-6/12 p-2">
               <fieldset>
                  <label htmlFor="" className="block text-sm mb-1">Country / Region*</label>
                  <input type="text" name="" id="" className="bg-[#F6F6F6] text-base h-11 w-full rounded-md p-3" placeholder="Country / Region" />
               </fieldset>
            </div>
            <div className="w-6/12 p-2">
               <fieldset>
                  <label htmlFor="" className="block text-sm mb-1">Street Address*</label>
                  <input type="text" name="" id="" className="bg-[#F6F6F6] text-base h-11 w-full rounded-md p-3" placeholder="Street Address" />
               </fieldset>
            </div>
            <div className="w-6/12 p-2">
               <fieldset>
                  <label htmlFor="" className="block text-sm mb-1">City*</label>
                  <input type="text" name="" id="" className="bg-[#F6F6F6] text-base h-11 w-full rounded-md p-3" placeholder="City" />
               </fieldset>
            </div>
            <div className="w-6/12 p-2">
               <fieldset>
                  <label htmlFor="" className="block text-sm mb-1">State*</label>
                  <input type="text" name="" id="" className="bg-[#F6F6F6] text-base h-11 w-full rounded-md p-3" placeholder="State" />
               </fieldset>
            </div>
            <div className="w-6/12 p-2">
               <fieldset>
                  <label htmlFor="" className="block text-sm mb-1">Zip*</label>
                  <input type="text" name="" id="" className="bg-[#F6F6F6] text-base h-11 w-full rounded-md p-3" placeholder="Zip" />
               </fieldset>
            </div>
            <div className="w-6/12 p-2">
               <fieldset>
                  <label htmlFor="" className="block text-sm mb-1">Phone*</label>
                  <input type="text" name="" id="" className="bg-[#F6F6F6] text-base h-11 w-full rounded-md p-3" placeholder="Phone" />
               </fieldset>
            </div>
            <div className="w-6/12 p-2">
               <fieldset>
                  <label htmlFor="" className="block text-sm mb-1">Country*</label>
                  <input type="text" name="" id="" className="bg-[#F6F6F6] text-base h-11 w-full rounded-md p-3" placeholder="Country" />
               </fieldset>
            </div>
            <div className="w-full p-2">
               <fieldset>
                  <label htmlFor="" className="block text-sm mb-1">Delivery Instruction</label>
                  <textarea rows={5} name="" id="" className="bg-[#F6F6F6] text-base w-full rounded-md p-3" placeholder="Delivery Instruction" />
               </fieldset>
            </div>
         </div>
         <div className="mb-4">
            <fieldset>
               <label htmlFor=""><input type="checkbox" name="" id="" />Set as default shipping address</label>
            </fieldset>
            <fieldset>
               <label htmlFor=""><input type="checkbox" name="" id="" />Set as default billing address</label>
            </fieldset>
         </div>
         <div className="flex gap-4">
            <Link href='/' className='bg-indigo-500 text-white py-2 px-6 rounded-md'>Save</Link>
            <Link href='/' className='bg-gray-500 text-gray-600 py-2 px-6 rounded-md'>Cancel</Link>
         </div>
      </div>
   )
}

export default AddressForm