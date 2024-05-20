'use client'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { useRouter } from 'next/navigation';
import { sellerInstance } from '@/config/axios';

type Inputs = {
   firstName: string
   lastName: string
   email: string
   password: string
   confirmPassword: string
}
const FormOne = () => {
   const router = useRouter();
   const schema = z.object({
      firstName: z.string().trim().min(2, { message: "This field has to be filled." }),
      lastName: z.string().trim().min(2, { message: "This field has to be filled." }),
      email: z.string().trim().min(1, { message: "This field has to be filled." }).email("This is not a valid email."),
      password: z.string().trim().min(1, { message: "This field has to be filled." }).regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/, {
         message: "Your password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.",
      }),
      confirmPassword: z.string().trim(),
   }).refine(data => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"]
   })
   const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
      mode: 'onChange',
      resolver: zodResolver(schema),
   })
   const onSubmit: SubmitHandler<Inputs> = async (data) => {
      console.log('onSubmit', data)
      try {
         const res = await sellerInstance.post(`/step/register`, data)
         console.log('onSubmit', res)
         router.push('/seller/register?step=2')
      } catch (error) {
         console.log('error', error)
      }
   }
   return (
      <div className=''>
         <div className="text-lg font-lato font-semibold text-gray-600 mb-4">Register Account</div>
         <form onSubmit={handleSubmit(onSubmit)} className=''>
            <div className="space-y-4">
               <div className="">
                  <label htmlFor="" className='block text-base text-gray-500 font-lato mb-1'>FirstName</label>
                  <input {...register("firstName")} className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4' autoComplete='off' />
                  {errors.firstName && <p className='text-sm text-red-500 font-lato mt-1'>{errors.firstName?.message}</p>}
               </div>
               <div className="">
                  <label htmlFor="" className='block text-base text-gray-500 font-lato mb-1'>LastName</label>
                  <input {...register("lastName")} className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4' autoComplete='off' />
                  {errors.lastName && <p className='text-sm text-red-500 font-lato mt-1'>{errors.lastName?.message}</p>}
               </div>
               <div className="">
                  <label htmlFor="" className='block text-base text-gray-500 font-lato mb-1'>Email</label>
                  <input {...register("email")} className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4' autoComplete='off' />
                  {errors.email && <p className='text-sm text-red-500 font-lato mt-1'>{errors.email?.message}</p>}
               </div>
               <div className="">
                  <label htmlFor="" className='block text-base text-gray-500 font-lato mb-1'>Password</label>
                  <input {...register("password")} className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4' autoComplete='off' />
                  {errors.password && <p className='text-sm text-red-500 font-lato mt-1'>{errors.password?.message}</p>}
               </div>
               <div className="">
                  <label htmlFor="" className='block text-base text-gray-500 font-lato mb-1'>Confirm Password</label>
                  <input {...register("confirmPassword")} className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4' autoComplete='off' />
                  {errors.confirmPassword && <p className='text-sm text-red-500 font-lato mt-1'>{errors.confirmPassword?.message}</p>}
               </div>
            </div>
            <div className="flex justify-end mt-4">
               <button type="submit" className=' border border-slate-500 rounded py-1 px-4'>Continue & Next</button>
            </div>
         </form>
      </div>
   )
}

export default FormOne