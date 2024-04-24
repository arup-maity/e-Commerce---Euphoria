import React from 'react'

const AddProduct = () => {
   return (
      <div>
         <form action="" className='space-y-4'>
            <fieldset>
               <label htmlFor=""></label>
               <input type="text" name="" id="" className='bg-transparent w-full h-11 text-xl text-gray-500 font-lato border border-slate-200 focus:border-slate-300 focus:outline-0 rounded-md px-3' />
            </fieldset>
            <fieldset>
               <label htmlFor=""></label>
               <input type="text" name="" id="" className='bg-transparent w-full h-11 text-base text-gray-500 font-lato border border-slate-200 focus:border-slate-300 focus:outline-0 rounded-md px-3' />
            </fieldset>
            <fieldset>
               <label htmlFor=""></label>
               <textarea name="" id="" rows={10} className='bg-transparent w-full text-base text-gray-500 font-lato border border-slate-200 focus:border-slate-300 focus:outline-0 rounded-md p-3'></textarea>
            </fieldset>
         </form>
      </div>
   )
}

export default AddProduct