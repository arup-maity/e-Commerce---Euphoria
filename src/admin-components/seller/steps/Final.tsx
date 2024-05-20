'use client'
import React, { useEffect } from 'react'
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form"
import { sellerInstance } from '@/config/axios';
import { useRouter } from 'next/navigation';

type FormValues = {
   fullName: string,
   email: string,
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

const Final = () => {
   const router = useRouter()
   useEffect(() => {
      getDetails()
   }, [])

   const defaultValues = {
      fullName: '',
      email: '',
      storeDetails: [{ storeName: '', description: '' }],
      storeAddress: [{ addressLineOne: "", addressLineTwo: '', city: '', state: '', postalCode: '', country: '' }],
      pickupAddress: [{ addressLineOne: "", addressLineTwo: '', city: '', state: '', postalCode: '', country: '' }]
   }
   const { register, control, handleSubmit, setValue, formState: { errors } } = useForm<FormValues>({
      defaultValues,
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
         const res = await sellerInstance.get(`/registration/complete`)
         console.log('onSubmit', res)
         router.push('/seller/login')
      } catch (error) {
         console.log('error', error)
      }
   }
   async function getDetails() {
      try {
         const res = await sellerInstance.get(`/register/final`)
         console.log('details', res)
         for (const key in defaultValues) {
            switch (key) {
               case 'storeDetails':
                  setValue("storeDetails", res.data.details.sellersStores)
                  break;
               case 'storeAddress':
                  setValue("storeAddress", res.data.details.storeAddress)
                  break;
               case 'pickupAddress':
                  setValue("pickupAddress", res.data.details.pickupAddress)
                  break;
               default:
                  setValue(key, res.data.details[key])
                  break;
            }
         }
      } catch (error) {
         console.log('error', error)
      }
   }

   return (
      <div className=''>
         {/* <div className="">Step 3</div> */}
         <form onSubmit={handleSubmit(onSubmit)} className=''>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4 mb-4">
               <div className="">
                  <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>FullName</label>
               </div>
               <div className="md:col-span-3 w-full text-base">
                  <input {...register('fullName')} className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4' readOnly />
               </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4 mb-4">
               <div className="">
                  <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>Email</label>
               </div>
               <div className="md:col-span-3 w-full text-base">
                  <input {...register("email")} className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4' readOnly />
               </div>
            </div>
            <div className="text-lg font-lato font-semibold text-gray-600 mb-4">Store Details</div>
            {
               storeFields.map((field, index) => {
                  return (
                     <div key={field.id} className="grid gap-4 mb-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
                           <div className="">
                              <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>Store Name</label>
                           </div>
                           <div className="md:col-span-3 w-full text-base">
                              <input
                                 {...register(`storeDetails.${index}.storeName` as const)}
                                 className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4'
                                 readOnly
                              />
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
                                 readOnly
                              />
                           </div>
                        </div>
                     </div>
                  )
               })
            }
            <div className="text-lg font-lato font-semibold text-gray-600 mb-4">Store Address</div>
            <div>
               {fields.map((field, index) => {
                  return (
                     <div key={field.id} className='mb-4'>
                        <section className="space-y-4" key={field.id}>
                           <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
                              <div className="">
                                 <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>Address line 1</label>
                              </div>
                              <div className="md:col-span-3 w-full text-base">
                                 <input
                                    {...register(`storeAddress.${index}.addressLineOne` as const)}
                                    className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4'
                                    readOnly
                                 />
                              </div>
                           </div>
                           <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
                              <div className="">
                                 <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>Address line 2</label>
                              </div>
                              <div className="md:col-span-3 w-full text-base">
                                 <input
                                    {...register(`storeAddress.${index}.addressLineTwo` as const)}
                                    className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4'
                                    readOnly
                                 />
                              </div>
                           </div>
                           <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
                              <div className="">
                                 <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>City</label>
                              </div>
                              <div className="md:col-span-3 w-full text-base">
                                 <input
                                    {...register(`storeAddress.${index}.city` as const)}
                                    className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4'
                                    readOnly
                                 />
                              </div>
                           </div>
                           <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
                              <div className="">
                                 <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>State</label>
                              </div>
                              <div className="md:col-span-3 w-full text-base">
                                 <input
                                    {...register(`storeAddress.${index}.state` as const)}
                                    className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4'
                                    readOnly
                                 />
                              </div>
                           </div>
                           <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
                              <div className="">
                                 <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>Postal Code</label>
                              </div>
                              <div className="md:col-span-3 w-full text-base">
                                 <input
                                    {...register(`storeAddress.${index}.postalCode` as const)}
                                    className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4'
                                    readOnly
                                 />
                              </div>
                           </div>
                        </section>
                     </div>
                  );
               })}
               <div className="text-lg font-lato font-semibold text-gray-600 mb-4">Pickup Address</div>
               {pickupFields.map((field, index) => {
                  return (
                     <div key={field.id}>
                        <section className="space-y-4" key={field.id}>
                           <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
                              <div className="">
                                 <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>Address line 1</label>
                              </div>
                              <div className="md:col-span-3 w-full text-base">
                                 <input
                                    {...register(`pickupAddress.${index}.addressLineOne` as const)}
                                    className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4'
                                    readOnly
                                 />
                              </div>
                           </div>
                           <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
                              <div className="">
                                 <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>Address line 2</label>
                              </div>
                              <div className="md:col-span-3 w-full text-base">
                                 <input
                                    {...register(`pickupAddress.${index}.addressLineTwo` as const)}
                                    className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4'
                                    readOnly
                                 />
                              </div>
                           </div>
                           <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
                              <div className="">
                                 <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>City</label>
                              </div>
                              <div className="md:col-span-3 w-full text-base">
                                 <input
                                    {...register(`pickupAddress.${index}.city` as const)}
                                    className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4'
                                    readOnly
                                 />
                              </div>
                           </div>
                           <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
                              <div className="">
                                 <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>State</label>
                              </div>
                              <div className="md:col-span-3 w-full text-base">
                                 <input
                                    {...register(`pickupAddress.${index}.state` as const)}
                                    className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4'
                                    readOnly
                                 />
                              </div>
                           </div>
                           <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
                              <div className="">
                                 <label htmlFor="" className='block text-base text-gray-500 font-lato mb-2'>Postal Code</label>
                              </div>
                              <div className="md:col-span-3 w-full text-base">
                                 <input
                                    {...register(`pickupAddress.${index}.postalCode` as const)}
                                    className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-4'
                                    readOnly
                                 />
                              </div>
                           </div>
                        </section>
                     </div>
                  );
               })}
            </div>
            <div className="flex items-center justify-end gap-2 mt-5">
               <button type="submit" className='flex justify-end border border-slate-500 rounded py-1 px-4'>Submit</button>
            </div>
         </form>
      </div>
   )
}

export default Final