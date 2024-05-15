'use client'
import React from 'react'
import Image from 'next/image'
import { notFound, useSearchParams } from 'next/navigation'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { adminInstance } from '@/config/axios'

const ResetPassword = () => {
   const searchParams = useSearchParams()
   const token = searchParams.get('token')
   const schema = z.object({
      password: z.string().min(1, { message: "This field has to be filled." }).regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).(?=.*?[#?!@$%^&*-]).{8,}$/, {
         message: "Your password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and special character.",
      }),
      confirmPassword: z.string()
   }).refine(data => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"]
   })
   const { register, handleSubmit, formState: { errors }, } = useForm({
      defaultValues: {
         password: '',
         confirmPassword: ''
      },
      mode: 'onChange',
      resolver: zodResolver(schema),
   })
   const onSubmit = async (data: any) => {
      console.log(data)
      try {
         const response = await adminInstance.post(`/auth/reset-password`, { password: data.password, token })
         console.log('success', response)
      } catch (error) {
         console.log('error', error)
      }
   }

   if (token === null || token === '') {
      notFound()
   }
   return (
      <div className='w-full p-4'>
         <div className="flex flex-wrap -m-4">
            <div className="w-full lg:w-7/12 flex justify-center p-4">
               <div className="w-6/12 lg:w-11/12">
                  <Image src='/reset-password.svg' alt='' width={200} height={200} className='w-full h-full' />
               </div>
            </div>
            <div className="w-full lg:w-4/12 flex items-center justify-center p-4">
               <div className="w-full md:w-8/12 lg:w-full">
                  <div className="w-full text-2xl font-semibold mb-2">Create New Password</div>
                  <p className='text-sm text-gray-500 mb-5'>Your new password must be different from previous used passwords.</p>
                  <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                     <fieldset>
                        <label htmlFor="" className='block text-sm text-slate-400 mb-2'>New Password</label>
                        <input type="text" {...register("password")} className="bg-transparent h-10 w-full text-base font-lato border border-slate-400 rounded p-3" placeholder="********" />
                        {errors.password && <p className='text-sm text-red-500 mt-1'>{errors.password.message}</p>}
                     </fieldset>
                     <fieldset>
                        <label htmlFor="" className='block text-sm text-slate-400 mb-2'>Confirm Password</label>
                        <input type="text" {...register("confirmPassword")} className="bg-transparent h-10 w-full text-base font-lato border border-slate-400 rounded p-3" placeholder="********" />
                        {errors.confirmPassword && <p className='text-sm text-red-500 mt-1'>{errors.confirmPassword.message}</p>}
                     </fieldset>
                     <div className="">
                        <button type='submit' className='w-full bg-indigo-500 text-sm text-white border border-indigo-500 rounded py-2'>Reset Password</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ResetPassword