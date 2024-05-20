'use client'
import React, { useEffect } from 'react'
import { useForm, SubmitHandler, Control, useFieldArray } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { useRouter } from 'next/navigation';
import { sellerInstance } from '@/config/axios';


type FormValues = {
   storeDetails: {
      storeName: string;
      description: string;
   }[]
   storeAddress: {
      addressLineOne: string;
      addressLineTwo: string;
      city: string;
      state: string;
      postalCode: string;
      country: string;
   }[]
   pickupAddress: {
      addressLineOne: string;
      addressLineTwo: string;
      city: string;
      state: string;
      postalCode: string;
      country: string;
   }[]
};
const FormTwo = () => {
   const router = useRouter();

   const addressSchema = z.object({
      addressOne: z.string().trim().min(5, "Address Line 1 is required"),
      addressTwo: z.string().trim().optional(),
      city: z.string().trim().min(1, "City is required"),
      state: z.string().trim().min(1, "State must be 2 characters"),
      postalCode: z.string().trim().min(1, "Postal Code is required"),
      country: z.string().trim().min(1, "Country is required"),
   });

   const storeDetailsSchema = z.object({
      storeName: z.string().trim().min(4, "Store Name is required"),
      description: z.string().trim().optional(),
   });
   const sellerFormSchema = z.object({
      storeDetails: z.array(storeDetailsSchema).nonempty("Store details are required"),
      storeAddress: addressSchema.array().nonempty("Store address is required"),
      pickupAddress: addressSchema.array().nonempty("Store address is required"),
   });
   const { register, control, handleSubmit, formState: { errors } } = useForm<FormValues>({
      defaultValues: {
         storeDetails: [{ storeName: '', description: '' }],
         storeAddress: [{ addressLineOne: "", addressLineTwo: '', city: '', state: '', postalCode: '', country: '' }],
         pickupAddress: [{ addressLineOne: "", addressLineTwo: '', city: '', state: '', postalCode: '', country: '' }]
      },
      mode: 'onChange',
      // resolver: zodResolver(sellerFormSchema),
   })
   const { fields: storeFields } = useFieldArray({
      name: "storeDetails",
      control
   });
   const { fields } = useFieldArray({
      name: "storeAddress",
      control
   });
   const { fields: pickupFields } = useFieldArray({
      name: "pickupAddress",
      control
   });
   const onSubmit: SubmitHandler<FormValues> = async (data) => {
      console.log('onSubmit', data)
      try {
         const res = await sellerInstance.post(`/register/store-setup`, data)
         console.log('onSubmit', res)
         router.push('/seller/register?step=3')
      } catch (error) {
         console.log('error', error)
      }
   }
   return (
      <div className=''>
         <div className="text-lg font-lato font-semibold text-gray-600 mb-4">Store Details & Address</div>
         <form onSubmit={handleSubmit(onSubmit)} className=''>
            {
               storeFields.map((field, index) => {
                  return (
                     <div key={field.id} className="grid gap-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
                           <div className="">
                              <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>Store Name</label>
                           </div>
                           <div className="md:col-span-3 w-full text-base">
                              <input
                                 {...register(`storeDetails.${index}.storeName` as const)}
                                 className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4'
                              />
                              {
                                 errors?.storeDetails?.[index].storeName && <p className='text-sm text-red-500 font-lato mt-1'>{errors?.storeDetails[index].storeName.message}</p>
                              }
                           </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
                           <div className="">
                              <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>Description</label>
                           </div>
                           <div className="md:col-span-3 w-full text-base">
                              <input
                                 {...register(`storeDetails.${index}.description` as const)}
                                 className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4'
                              />
                              {
                                 errors?.storeDetails?.[index].description && <p className='text-sm text-red-500 font-lato mt-1'>{errors?.storeDetails[index].description.message}</p>
                              }
                           </div>
                        </div>
                     </div>
                  )
               })
            }

            <div>
               <div className="text-lg font-lato font-semibold text-gray-600 mb-4">Store Address</div>
               {fields.map((field, index) => {
                  return (
                     <div key={field.id} className='mb-4'>
                        <section className="space-y-4" key={field.id}>
                           <fieldset>
                              <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>Address 1</label>
                              <input
                                 placeholder="address line 1"
                                 {...register(`storeAddress.${index}.addressLineOne` as const)}
                                 className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4'
                              />
                           </fieldset>
                           <fieldset>
                              <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>Address 2</label>
                              <input
                                 placeholder="address line 2"
                                 {...register(`storeAddress.${index}.addressLineTwo` as const)}
                                 className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4'
                              />
                           </fieldset>
                           <fieldset>
                              <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>City</label>
                              <input
                                 placeholder="city"
                                 {...register(`storeAddress.${index}.city` as const)}
                                 className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4'
                              />
                           </fieldset>
                           <fieldset>
                              <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>State</label>
                              <input
                                 placeholder="state"
                                 {...register(`storeAddress.${index}.state` as const)}
                                 className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4'
                              />
                           </fieldset>
                           <fieldset>
                              <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>Postal Code</label>
                              <input
                                 placeholder="postal code"
                                 {...register(`storeAddress.${index}.postalCode` as const)}
                                 className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4'
                              />
                           </fieldset>
                           <fieldset>
                              <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>Country</label>
                              <input
                                 placeholder="country"
                                 {...register(`storeAddress.${index}.country` as const)}
                                 className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4'
                              />
                           </fieldset>
                        </section>
                     </div>
                  );
               })}
               <div className="text-lg font-lato font-semibold text-gray-600 mb-4">Pickup Address</div>
               {pickupFields.map((field, index) => {
                  return (
                     <div key={field.id}>
                        <section className="space-y-4" key={field.id}>
                           <fieldset>
                              <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>Address 1</label>
                              <input
                                 placeholder="address line 1"
                                 {...register(`pickupAddress.${index}.addressLineOne` as const)}
                                 className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4'
                              />
                           </fieldset>
                           <fieldset>
                              <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>Address 2</label>
                              <input
                                 placeholder="address line 2"
                                 {...register(`pickupAddress.${index}.addressLineTwo` as const)}
                                 className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4'
                              />
                           </fieldset>
                           <fieldset>
                              <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>City</label>
                              <input
                                 placeholder="city"
                                 {...register(`pickupAddress.${index}.city` as const)}
                                 className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4'
                              />
                           </fieldset>
                           <fieldset>
                              <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>State</label>
                              <input
                                 placeholder="state"
                                 {...register(`pickupAddress.${index}.state` as const)}
                                 className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4'
                              />
                           </fieldset>
                           <fieldset>
                              <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>Postal Code</label>
                              <input
                                 placeholder="postal code"
                                 {...register(`pickupAddress.${index}.postalCode` as const)}
                                 className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4'
                              />
                           </fieldset>
                           <fieldset>
                              <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>Country</label>
                              <input
                                 placeholder="country"
                                 {...register(`pickupAddress.${index}.country` as const)}
                                 className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4'
                              />
                           </fieldset>
                        </section>
                     </div>
                  )
               })}
            </div>
            <div className="flex items-center justify-end gap-2 mt-5">
               <button type="submit" className='flex justify-end border border-slate-500 rounded py-1 px-4'>Continue & Next</button>
            </div>
         </form>
      </div>
   )
}

export default FormTwo