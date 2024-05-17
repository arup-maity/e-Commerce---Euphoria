'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import z, { ZodError } from 'zod'
import { sellerInstance } from '@/config/axios';
type Errors = {
   [key: string]: string;
};
const ForgetPassword = () => {
   const [errors, setErrors] = useState<Errors>({})
   const [success, setSuccess] = useState(false)

   const SignUpSchema = z.object({
      email: z.string().email('Please provide a valid email').min(1, 'Please enter email')
   })

   const handleOneLevelZodError = ({ issues }: ZodError<unknown>) => {
      const formData: Record<string, string> = {};
      if (issues.length === 1 && issues[0].path.length < 1)
         return issues[0].message;
      issues.forEach(({ path, message }) => {
         formData[path.join('-')] = message;
      });
      return formData;
   };

   const handleForm = (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault()
      const data = Object.fromEntries(new FormData(e.currentTarget))
      try {
         const res = SignUpSchema.parse(data)
         setErrors({})
         sendLink(res.email)
      } catch (error) {
         if (error instanceof ZodError) {
            const formattedErr = handleOneLevelZodError(error)
            setErrors(formattedErr as Errors)
         } else {
            console.log('Invalid', error)
         }
      }
   }

   async function sendLink(email: string) {
      try {
         const { data } = await sellerInstance.post(`/auth/forget-password`, { email })
         if (data.success) {
            setSuccess(true)
         }
      } catch (error: any) {
         if (error.response && error.response.status === 409) {
            if (!error.response.data?.success) setErrors({ email: error.response.data?.message })
         } else {
            console.log('error', error)
         }
      }
   }

   if (success) {
      return (
         <div className="w-full min-h-screen flex flex-col items-center justify-center theme-container !py-10">
            <div className="w-10/12 md:w-6/12 mb-10">
               <Image src='/forget-password.svg' alt='' width={200} height={200} className='w-full h-full' />
            </div>
            <p className='text-base text-gray-500'>Your reset password link send into email, check your inbox</p>
         </div>
      )
   }
   return (
      <div className='w-full p-4'>
         <div className="flex flex-wrap -m-4">
            <div className="w-full lg:w-7/12 flex items-center justify-center p-4">
               <div className="w-10/12">
                  <Image src='/forget-password.svg' alt='' width={200} height={200} className='w-full h-full' />
               </div>
            </div>
            <div className="w-full lg:w-5/12 flex items-center justify-center p-4">
               <div className="w-full md:w-10/12">
                  <div className="w-full text-2xl font-semibold mb-2">Forget Your Password</div>
                  <p className='text-sm text-gray-500'>Enter your email and we&apos;ll send you a link to reset your password.</p>
                  <p className='text-sm text-gray-500 mb-5'>Please  check it.</p>
                  <form onSubmit={handleForm}>
                     <div className='space-y-4'>
                        <fieldset>
                           <input type="text" name="email" id="email" className="bg-transparent h-10 w-full text-base border border-slate-400 rounded p-3" placeholder="Email" />
                           {errors?.email && <p className='text-xs text-red-500 mt-1'>{errors.email}</p>}
                        </fieldset>
                        <div className="">
                           <button type='submit' className='w-full bg-indigo-500 text-sm text-white border border-indigo-500 rounded py-2'>Send</button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ForgetPassword