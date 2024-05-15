'use client'
import React from 'react'
import Link from 'next/link'
import { useForm, SubmitHandler } from "react-hook-form"
import { FcGoogle } from "react-icons/fc";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { adminInstance } from '@/config/axios';
import { useRouter } from 'next/navigation'
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { toast } from 'sonner';

type Inputs = {
   email: string
   password: string
}

const Login = () => {
   const router = useRouter()
   const [showPassword, setShowPassword] = React.useState(false)

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
      await adminInstance.post(`/auth/login`, data)
         .then((response) => {
            console.log('Successfully', response)
            if (response.data?.success) {
               toast.success(response.data?.message)
               router.push('/admin')
            }
         })
         .catch((error) => {
            if (error.response && error.response.status === 409) {
               // Handle the 409 Conflict error here
               console.log('API request conflict:', error.response.data);
               toast.warning(error.response.data?.message)
            } else {
               // Handle other errors
               console.log('API request error:', error);
            }
         })
   }

   return (
      <div className='w-full'>
         <div className="min-h-screen flex flex-wrap">
            <div className="w-full lg:w-7/12 hidden lg:block">

            </div>
            <div className="w-full lg:w-5/12 flex items-center justify-center">
               <div className="w-full md:w-4/5 p-4">
                  <Link href={process.env.NEXT_PUBLIC_API_URL + `/admin/auth/google-auth`} className="bg-gray-100 flex items-center justify-center flex-nowrap gap-5 py-2 rounded-md">
                     <FcGoogle size={20} />
                     <p className='text-base text-gray-500 font-lato whitespace-nowrap'>Continue With Google</p>
                  </Link>
                  <div className="my-5 relative w-full text-center before:absolute before:border-b-2 before:border-slate-100 before:w-full before:right-0 before:top-[10px] before:-z-10">
                     <span className='bg-white text-sm text-gray-500 px-3'>OR</span>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)} className=''>
                     <fieldset className='mb-4'>
                        <label htmlFor="" className='block text-sm text-gray-500 font-lato mb-2'>Email</label>
                        <input {...register("email")} className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4' placeholder='Email' />
                        {errors.email && <p className='text-sm text-red-500 font-lato mt-1'>{errors.email?.message}</p>}
                     </fieldset>
                     <fieldset className='mb-2'>
                        <label htmlFor="" className='block text-sm text-gray-500 font-lato mb-2'>Password</label>
                        <div className="relative">
                           <input type={showPassword ? 'text' : 'password'} {...register("password")} className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4' placeholder='********' />
                           <div className="absolute top-3 right-3 cursor-pointer" onClick={() => setShowPassword(prev => !prev)}>
                              {showPassword ? <IoEyeOutline size='18' /> : <IoEyeOffOutline size='18' />}
                           </div>
                        </div>
                        {errors.password && <p className='text-xs text-red-500'>{errors.password?.message}</p>}
                     </fieldset>
                     <div className="mb-12">
                        <Link href='/' className='text-sm text-indigo-400 font-lato float-end whitespace-nowrap'>Forget password ?</Link>
                     </div>
                     <button type="submit" className='w-full bg-indigo-400 text-white text-base font-lato text-center rounded-md py-2'>Login</button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Login