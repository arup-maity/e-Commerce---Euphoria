import React from 'react'

const Category = () => {
   return (
      <div>
         <button>Add Category</button>
         <div className="">
            <form action="" className='space-y-4 w-full lg:w-[70%]'>
               <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className=""><label htmlFor="">vvvf</label></div>
                  <div className="md:col-span-2">
                     <div className="w-40 h-40 border border-slate-200 rounded-md"></div>
                  </div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className=""><label htmlFor=""></label></div>
                  <div className="md:col-span-2"><input type="text" name="" id="" className='w-full h-10 bg-transparent text-base text-gray-500 font-lato border border-slate-200 focus:border-slate-300 focus:outline-0 rounded-md px-3' placeholder='name' /></div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className=""><label htmlFor=""></label></div>
                  <div className="md:col-span-2"><input type="text" name="" id="" className='w-full h-10 bg-transparent text-base text-gray-500 font-lato border border-slate-200 focus:border-slate-300 focus:outline-0 rounded-md px-3' placeholder='slug' /></div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className=""><label htmlFor=""></label></div>
                  <div className="md:col-span-2"><input type="text" name="" id="" className='w-full h-10 bg-transparent text-base text-gray-500 font-lato border border-slate-200 focus:border-slate-300 focus:outline-0 rounded-md px-3' placeholder='parent' /></div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className=""><label htmlFor=""></label></div>
                  <div className="md:col-span-2"><textarea name="" id="" rows={5} className='w-full bg-transparent text-base text-gray-500 font-lato border border-slate-200 focus:border-slate-300 focus:outline-0 rounded-md p-2' placeholder='description'></textarea></div>
               </div>
            </form>
         </div>
      </div>
   )
}

export default Category