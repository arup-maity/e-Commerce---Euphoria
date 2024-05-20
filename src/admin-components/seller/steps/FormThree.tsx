'use client'
import React from 'react'
import { useForm, SubmitHandler, Control, useFieldArray } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { sellerInstance } from '@/config/axios';
import { useRouter } from 'next/navigation';


type FormValues = {
   bankDetails: {
      accountName: string;
      accountNumber: string;
      ifscCode: string;
      bankName: string;
   }[]
};
const FormThree = () => {
   const router = useRouter();
   const { register, control, handleSubmit, formState: { errors } } = useForm<FormValues>({
      defaultValues: {
         bankDetails: [{ accountName: '', accountNumber: '', ifscCode: '', bankName: '' }]
      },
      mode: 'onChange',
   })
   const { fields } = useFieldArray({
      name: "bankDetails",
      control
   });

   const onSubmit: SubmitHandler<FormValues> = async (data) => {
      console.log('onSubmit', data)
      try {
         const bankDetails = await sellerInstance.post(`/register/bank-details`, data)
         console.log('onSubmit', bankDetails)
         router.push('/seller/register?step=4')
      } catch (error) {
         console.log('onSubmit', error)
      }
   }
   return (
      <div className=''>
         <div className="text-xl font-lato font-semibold text-gray-600 mb-4">Bank Details</div>
         <form onSubmit={handleSubmit(onSubmit)} className=''>
            {
               fields.map((field, index) => {
                  return (
                     <div key={field.id} className="grid gap-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
                           <div className="">
                              <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>Bank Name</label>
                           </div>
                           <div className="md:col-span-3 w-full text-base">
                              <input
                                 {...register(`bankDetails.${index}.bankName` as const)}
                                 className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4'
                              />
                              {
                                 errors?.bankDetails?.[index].bankName && <p className='text-sm text-red-500 font-lato mt-1'>{errors?.bankDetails[index].bankName.message}</p>
                              }
                           </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
                           <div className="">
                              <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>Account Name</label>
                           </div>
                           <div className="md:col-span-3 w-full text-base">
                              <input
                                 {...register(`bankDetails.${index}.accountName` as const)}
                                 className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4'
                              />
                              {
                                 errors?.bankDetails?.[index].accountName && <p className='text-sm text-red-500 font-lato mt-1'>{errors?.bankDetails[index].accountName.message}</p>
                              }
                           </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
                           <div className="">
                              <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>Account Number</label>
                           </div>
                           <div className="md:col-span-3 w-full text-base">
                              <input
                                 {...register(`bankDetails.${index}.accountNumber` as const)}
                                 className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4'
                              />
                              {
                                 errors?.bankDetails?.[index].accountNumber && <p className='text-sm text-red-500 font-lato mt-1'>{errors?.bankDetails[index].accountNumber.message}</p>
                              }
                           </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
                           <div className="">
                              <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>IFSC Code</label>
                           </div>
                           <div className="md:col-span-3 w-full text-base">
                              <input
                                 {...register(`bankDetails.${index}.ifscCode` as const)}
                                 className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4'
                              />
                              {
                                 errors?.bankDetails?.[index].ifscCode && <p className='text-sm text-red-500 font-lato mt-1'>{errors?.bankDetails[index].ifscCode.message}</p>
                              }
                           </div>
                        </div>
                     </div>
                  )
               })
            }
            <div className="flex items-center justify-end gap-2 mt-5">
               <button type="button" className='flex justify-end border border-slate-500 rounded py-1 px-4'>Prev</button>
               <button type="submit" className='flex justify-end border border-slate-500 rounded py-1 px-4'>Next</button>
            </div>
         </form>
      </div>
   )
}

export default FormThree