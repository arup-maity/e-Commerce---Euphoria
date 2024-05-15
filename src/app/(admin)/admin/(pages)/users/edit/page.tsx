'use client'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { adminInstance } from '@/config/axios';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation'

type Inputs = {
   fullName: string
   email: string
   password: string
}

const EditUser = () => {
   const router = useRouter()
   const schema = z.object({
      fullname: z.string().min(1, { message: "This field has to be filled." }).regex(/^[a-zA-Z\s]*$/, {
         message: "Your name must only contain letters.",
      }),
      email: z.string().min(1, { message: "This field has to be filled." }).email("This is not a valid email."),
      password: z.string().min(1, { message: "This field has to be filled." }).regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/, {
         message: "Your password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.",
      }),
   });
   const { register, handleSubmit, formState: { errors } } = useForm({

   })
   const onSubmit: SubmitHandler<Inputs> = async (data) => {
      try {
         const response = await adminInstance.post(`/add-admin`, data)
         toast(response.data?.message)
         router.push('/admin/users')
      } catch (error) {
         if (error.response && error.response.status === 409) {
            // Handle the 409 Conflict error here
            console.log('API request conflict:', error.response.data);
            toast(error.response.data?.message)
         } else {
            // Handle other errors
            console.log('API request error:', error);
         }
      }
   }
   return (
      <div className='bg-white rounded p-4'>
         <form onSubmit={handleSubmit(onSubmit)} className='w-8/12'>
            <div className="grid gap-4">
               <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
                  <div className="">
                     <label htmlFor="" className='block text-sm text-gray-500 font-lato mb-2'>Full Name</label>
                  </div>
                  <div className="md:col-span-3 w-full text-base">
                     <input {...register("fullName")} className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4' />
                     {errors.fullName && <p className='text-sm text-red-500 font-lato mt-1'>{errors.fullName?.message}</p>}
                  </div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
                  <div className="">
                     <label htmlFor="" className='block text-sm text-gray-500 font-lato mb-2'>Email</label>
                  </div>
                  <div className="md:col-span-3 w-full text-base">
                     <input {...register("email")} className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4' />
                     {errors.email && <p className='text-sm text-red-500 font-lato mt-1'>{errors.email?.message}</p>}
                  </div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
                  <div className="">
                     <label htmlFor="" className='block text-sm text-gray-500 font-lato mb-2'>Password</label>
                  </div>
                  <div className="md:col-span-3 w-full text-base">
                     <input {...register("password")} className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4' />
                     {errors.password && <p className='text-sm text-red-500 font-lato mt-1'>{errors.password?.message}</p>}
                  </div>
               </div>
            </div>
            <div className="">
               <button type='submit' className='text-base border border-gray-500 rounded py-1 px-4'>Submit</button>
            </div>
         </form>
      </div>
   )
}

export default EditUser