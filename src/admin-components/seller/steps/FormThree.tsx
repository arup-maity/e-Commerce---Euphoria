'use client'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";

type Inputs = {
   fullName: string
   email: string
   password: string
   condition: boolean
}

const FormThree = ({ onPrev, onNext }) => {
   const schema = z.object({
      fullName: z.string().min(4, { message: "This field has to be filled." }),
      condition: z.boolean(),
   })
   const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
      mode: 'onChange',
      // resolver: zodResolver(schema),
   })
   const onSubmit: SubmitHandler<Inputs> = async (data) => {
      console.log('onSubmit', data)
      onNext()
   }
   return (
      <div className='theme-container mt-10'>
         <div className="">Step 3</div>
         <form onSubmit={handleSubmit(onSubmit)} className=''>
            <div className="grid  space-y-4">
               <div className="grid gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
                     <div className="">
                        <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>FirstName</label>
                     </div>
                     <div className="md:col-span-3 w-full text-base">
                        <input {...register("fullName")} className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4' />
                        {errors.fullName && <p className='text-sm text-red-500 font-lato mt-1'>{errors.fullName?.message}</p>}
                     </div>
                  </div>
               </div>
               <div className="grid gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
                     <div className="">
                        <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>LastName</label>
                     </div>
                     <div className="md:col-span-3 w-full text-base">
                        <input {...register("fullName")} className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4' />
                        {errors.fullName && <p className='text-sm text-red-500 font-lato mt-1'>{errors.fullName?.message}</p>}
                     </div>
                  </div>
               </div>
            </div>
            <div className="">
               <button type="button" className='flex justify-end border border-slate-500 rounded py-1 px-4' onClick={onPrev}>Prev</button>
               <button type="submit" className='flex justify-end border border-slate-500 rounded py-1 px-4'>Next</button>
            </div>
         </form>
      </div>
   )
}

export default FormThree