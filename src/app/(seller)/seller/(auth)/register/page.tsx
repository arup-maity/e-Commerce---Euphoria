'use client'
import React from 'react'
import Link from 'next/link'
import { useForm, SubmitHandler } from "react-hook-form"
import { FcGoogle } from "react-icons/fc";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { authInstance } from '@/config/axios';
import { useRouter } from 'next/navigation'

type Inputs = {
   email: string
   password: string
}

const Register = () => {
   const router = useRouter()

   const schema = z.object({
      email: z.string().min(1, { message: "This field has to be filled." }).email("This is not a valid email."),
      password: z.string().min(1, { message: "This field has to be filled." }).regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/, {
         message: "Your password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.",
      }),
   });
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<Inputs>({
      resolver: zodResolver(schema),
   })
   const onSubmit: SubmitHandler<Inputs> = async (data) => {
      await authInstance.post(`/seller-register`, data)
         .then((response) => router.push('/seller/login'))
         .catch((error) => console.log(error))
   }

   return (
      <div className='w-full'>
         <div className=" min-h-screen flex flex-wrap">
            <div className="w-7/12"></div>
            <div className="w-5/12 flex items-center justify-center">
               <div className="w-4/5">
                  <Link href={process.env.NEXT_PUBLIC_API_URL + `/social-auth/google`} className="bg-gray-100 flex items-center justify-center flex-nowrap gap-5 py-2 rounded-md">
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
                     <div className="mb-1">
                        <label htmlFor="policy-1" className='text-sm text-gray-600 flex items-center cursor-pointer'>
                           <input type="checkbox" name="policy-1" id="policy-1" className='me-2 w-4 h-4 cursor-pointer' />
                           Agree to our Terms of use and Privacy Policy
                        </label>
                     </div>
                     <div className="mb-5">
                        <label htmlFor="policy-2" className='text-sm text-gray-600 flex items-center'>
                           <input type="checkbox" name="policy-2" id="policy-2" className='me-2 w-4 h-4' />
                           Subscribe to our monthly newsletter
                        </label>
                     </div>
                     <button type="submit" className='w-full bg-indigo-400 text-white text-base text-center rounded-md py-2'>Register</button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Register