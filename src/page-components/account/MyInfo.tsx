import React from 'react'

const MyInfo = () => {
   return (
      <div id='myInfo' className="">
         <p className='text-2xl text-[#3C4242] font-bold font-lato mb-4'>My Info</p>
         <p className='text-xl text-[#3C4242] font-lato font-bold mb-4'>Contact Details</p>
         <div className="">
            <fieldset>
               <label htmlFor="" className='text-sm text-[#807D7E] mb-1'>Your Name</label>
               <div className="flex flex-nowrap items-center">
                  <input type="text" name="" id="" value="Arup Maity" readOnly className='w-full h-10 text-lg' />
                  <button>Change</button>
               </div>
            </fieldset>
            <hr className='my-2' />
            <fieldset>
               <label htmlFor="" className='text-sm text-[#807D7E] mb-1'>Email Address</label>
               <div className="flex flex-nowrap items-center">
                  <input type="text" name="" id="" value="arupmaity@gmail.com" readOnly className='w-full h-10 text-lg' />
                  <button>Change</button>
               </div>
            </fieldset>
            <hr className='my-2' />
            <fieldset>
               <label htmlFor="" className='text-sm text-[#807D7E] mb-1'>Phone Number</label>
               <div className="flex flex-nowrap items-center">
                  <input type="text" name="" id="" value="+91 7908 0789 76" readOnly className='w-full h-10 text-lg' />
                  <button>Change</button>
               </div>
            </fieldset>
            <hr className='my-2' />
            <fieldset>
               <label htmlFor="" className='text-sm text-[#807D7E] mb-1'>Password</label>
               <div className="flex flex-nowrap items-center">
                  <input type="password" name="" id="" value="Qwerty@123" readOnly className='w-full h-10 text-lg' />
                  <button>Change</button>
               </div>
            </fieldset>
            <hr className='my-2' />
            <div className="flex flex-nowrap justify-between items-center my-4">
               <p className='text-xl text-[#3C4242] font-bold font-lato'>Address</p>
               <button>Add New</button>
            </div>
            <div className="w-full flex flex-wrap -m-3">
               <div className="w-6/12 p-3">
                  <div className="bg-gray-100 p-4 rounded-md space-y-3">
                     <p className='text-lg font-lato'>Arup Maity</p>
                     <p className='text-base text-[#807D7E]'>+91 7908 0789 76</p>
                     <p className='text-base text-[#807D7E]'>1/4 Pragatinagar Flats, opp. jain derasar , near Jain
                        derasar, Vijaynagar road </p>
                     <ul className='flex flex-nowrap gap-4'>
                        <li role='button' className='text-[#807D7E] border border-slate-400 rounded-md py-1 px-5'>Home</li>
                        <li role='button' className='text-[#807D7E] border border-slate-400 rounded-md py-1 px-5'>Default billing address</li>
                     </ul>
                     <ul className='flex flex-nowrap gap-2'>
                        <li>Remove</li>
                        <li>|</li>
                        <li>Edit</li>
                     </ul>
                  </div>
               </div>
               <div className="w-6/12 p-3">
                  <div className="bg-gray-100 p-4 rounded-md space-y-3">
                     <p className='text-lg font-lato'>Arup Maity</p>
                     <p className='text-base text-[#807D7E]'>+91 7908 0789 76</p>
                     <p className='text-base text-[#807D7E]'>1/4 Pragatinagar Flats, opp. jain derasar , near Jain
                        derasar, Vijaynagar road </p>
                     <ul className='flex flex-nowrap gap-4'>
                        <li role='button' className='text-[#807D7E] border border-slate-400 rounded-md py-1 px-5'>Home</li>
                        <li role='button' className='text-[#807D7E] border border-slate-400 rounded-md py-1 px-5'>Default billing address</li>
                     </ul>
                     <ul className='flex flex-nowrap gap-2'>
                        <li>Remove</li>
                        <li>|</li>
                        <li>Edit</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default MyInfo