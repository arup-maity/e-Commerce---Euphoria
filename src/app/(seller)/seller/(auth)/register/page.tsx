'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { authInstance } from '@/config/axios';
import { FcGoogle } from "react-icons/fc";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

type Inputs = {
   fullName: string
   email: string
   password: string
   condition: boolean
}

const Register = () => {
   const router = useRouter()
   const [showPassword, setShowPassword] = useState(false)

   const schema = z.object({
      fullName: z.string().min(4, { message: "This field has to be filled." }),
      email: z.string().min(1, { message: "This field has to be filled." }).email("This is not a valid email."),
      password: z.string().min(1, { message: "This field has to be filled." }).regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/, {
         message: "Your password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.",
      }),
      condition: z.boolean(),
   });
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<Inputs>({
      resolver: zodResolver(schema),
   })
   const onSubmit: SubmitHandler<Inputs> = async (data) => {
      if (data.condition) {
         await authInstance.post(`/seller-register`, data)
            .then((response) => {
               if (response.data.success) router.push('/seller/login')
            })
            .catch((error) => console.log(error))
      }
   }

   return (
      <div className='w-full'>
         <div className=" min-h-screen flex flex-wrap">
            <div className="w-full lg:w-7/12 hidden lg:block"></div>
            <div className="w-full lg:w-5/12 flex items-center justify-center">
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
                        <label htmlFor="fillName" className='block text-base text-gray-500 font-lato mb-1.5'>FullName</label>
                        <input {...register("fullName")} className='w-full h-10 text-base text-gray-700 font-lato border border-slate-200 focus:outline-0 rounded-md p-3' autoComplete='off' />
                        {
                           errors.fullName &&
                           <p className='text-sm text-red-500 font-lato mt-1'>{errors.fullName?.message}</p>
                        }
                     </fieldset>
                     <fieldset className='mb-4'>
                        <label htmlFor="email" className='block text-base text-gray-500 font-lato mb-1.5'>Email Address</label>
                        <input {...register("email")} className='w-full h-10 text-base text-gray-700 font-lato border border-slate-200 focus:outline-0 rounded-md p-4' autoComplete='off' />
                        {
                           errors.email &&
                           <p className='text-sm text-red-500 font-lato mt-1'>{errors.email?.message}</p>
                        }
                     </fieldset>
                     <fieldset className='mb-2'>
                        <label htmlFor="password" className='block text-base text-gray-500 font-lato mb-1.5'>Password</label>
                        <div className="relative">
                           <input type={showPassword ? 'text' : 'password'} {...register("password")} className='w-full h-10 text-base text-gray-700 font-lato border border-slate-200 focus:outline-0 rounded-md p-4' autoComplete='off' />
                           <span role='button' className='absolute top-3 right-3' onClick={() => setShowPassword(prev => !prev)}>
                              {
                                 showPassword ? <IoEyeOutline /> : <IoEyeOffOutline size='20' className='text-gray-400' />
                              }
                           </span>
                        </div>
                        {
                           errors.password ?
                              <p className='text-sm text-red-500 font-lato mt-1'>{errors.password?.message}</p> : <p className='text-sm text-gray-400 font-lato mt-1'>Use 8 or more characters with a mix of letters, numbers & symbols</p>
                        }
                     </fieldset>
                     <div className="mb-12">
                        <Link href='/' className='text-sm text-indigo-400 float-end'>Forget password ?</Link>
                     </div>
                     <div className="mb-4">
                        <label htmlFor="condition" className='text-base text-gray-600 font-lato flex items-center cursor-pointer'>
                           <input type="checkbox" {...register("condition")} className='me-2 w-4 h-4 cursor-pointer' />
                           Agree to our <Link href='/' className='underline underline-offset-2 px-2'>Terms of use</Link> and <Link href='/' className='underline underline-offset-2 px-2'>Privacy Policy</Link>
                        </label>
                     </div>
                     <button type="submit" className='w-full bg-indigo-400 text-white text-base text-center rounded-md py-2'>Register</button>
                  </form>
                  <p className='text-sm text-gray-500 font-lato mt-3'>Already have an  account? <Link href='/seller/login' className='underline'>Log in</Link></p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Register