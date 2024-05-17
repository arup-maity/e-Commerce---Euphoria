'use client'
import React from 'react'
import Link from 'next/link'
import { useForm, SubmitHandler } from "react-hook-form"
import { FcGoogle } from "react-icons/fc";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { sellerInstance } from '@/config/axios';
import { useRouter } from 'next/navigation'

type Inputs = {
   email: string
   password: string
}

const Login = () => {
   const router = useRouter()

   const schema = z.object({
      email: z.string().min(1, { message: "This field has to be filled." }).email("This is not a valid email."),
      password: z.string().min(1, { message: "This field has to be filled." }).regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/, {
         message: "Your password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.",
      })
   });
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<Inputs>({
      resolver: zodResolver(schema),
   })
   const onSubmit: SubmitHandler<Inputs> = async (data) => {
      try {
         const res = await sellerInstance.post(`/auth/login`, data)
         console.log('Submit', res)
         if (res.data?.success) {
            router.push('/seller')
         }
      } catch (error) {
         console.log('Failed to submit', error)
      }
   }

   return (
      <div className='w-full'>
         <div className="min-h-screen flex flex-wrap">
            <div className="w-full lg:w-7/12 hidden lg:block"></div>
            <div className="w-full lg:w-5/12 flex items-center justify-center">
               <div className="w-full md:w-4/5 p-4">
                  <Link href={process.env.NEXT_PUBLIC_API_URL + `/seller/google`} className="bg-gray-100 flex items-center justify-center flex-nowrap gap-5 py-2 rounded-md">
                     <FcGoogle size={25} />
                     <p className='text-sm text-gray-500'>Continue With Google</p>
                  </Link>
                  <div className="my-5 relative w-full text-center before:absolute before:border-b-2 before:border-slate-100 before:w-full before:right-0 before:top-[10px] before:-z-10">
                     <span className='bg-white text-sm text-gray-500 px-3'>OR</span>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)} className=''>
                     <fieldset className='mb-4'>
                        <label htmlFor="" className='text-sm text-gray-500'>Email</label>
                        <input {...register("email")} className='w-full h-10 text-base border border-slate-200 focus:outline-0 rounded-md p-4' />
                        <p className='text-xs text-red-500'>{errors.email?.message}</p>
                     </fieldset>
                     <fieldset className='mb-2'>
                        <label htmlFor="" className='text-sm text-gray-500'>Password</label>
                        <input {...register("password")} className='w-full h-10 text-base border border-slate-200 focus:outline-0 rounded-md p-4' />
                        <p className='text-xs text-red-500'>{errors.password?.message}</p>
                     </fieldset>
                     <div className="mb-12">
                        <Link href='/' className='text-sm text-indigo-400 float-end'>Forget password ?</Link>
                     </div>
                     <button type="submit" className='w-full bg-indigo-400 text-white text-base text-center rounded-md py-2'>Login</button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Login