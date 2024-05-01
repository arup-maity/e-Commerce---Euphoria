'use client'
import React from 'react'
import Select from 'react-select';

const options = [
   { value: 'chocolate', label: 'Chocolate' },
   { value: 'strawberry', label: 'Strawberry' },
   { value: 'vanilla', label: 'Vanilla' },
];

const AddProduct = () => {
   return (
      <div>
         <form action="" className='space-y-4'>
            <fieldset>
               <label htmlFor="">Title</label>
               <input type="text" name="" id="" className='bg-transparent w-full h-11 text-xl text-gray-500 font-lato border border-slate-200 focus:border-slate-300 focus:outline-0 rounded-md px-3' />
            </fieldset>
            <fieldset>
               <label htmlFor="">Slug</label>
               <input type="text" name="" id="" className='bg-transparent w-full h-11 text-base text-gray-500 font-lato border border-slate-200 focus:border-slate-300 focus:outline-0 rounded-md px-3' />
            </fieldset>
            <fieldset>
               <label htmlFor="">Description</label>
               <textarea name="" id="" rows={5} className='bg-transparent w-full text-base text-gray-500 font-lato border border-slate-200 focus:border-slate-300 focus:outline-0 rounded-md p-3'></textarea>
            </fieldset>
            <fieldset>
               <label htmlFor="">Category</label>
               <Select
                  value={null}
                  onChange={e => console.log(e.value)}
                  options={options}
               />
            </fieldset>
         </form>
      </div>
   )
}

export default AddProduct