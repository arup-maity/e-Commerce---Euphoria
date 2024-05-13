'use client'
import ImageUpload from '@/admin-components/thumbnail/ImageUpload'
import MultipleImageUpload from '@/admin-components/thumbnail/MultipleImageUpload'
import { axiosInstance } from '@/config/axios'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import React, { useLayoutEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { toast } from 'sonner';

const EditBanner = () => {
   const searchParams = useSearchParams()
   const edit = searchParams.get('edit')
   const id = searchParams.get('id')

   const [image, setImage] = useState([])
   const [prevImage, setPrevImage] = useState([])

   useLayoutEffect(() => {
      if (edit) {
         getBanner()
      }
   }, [id, edit])

   const defaultValues = {
      title: '',
      slug: '',
      tagline: ''
   }
   const { register, handleSubmit, setValue, formState: { errors }, } = useForm({
      defaultValues
   })
   const onSubmit = async (data: any) => {
      console.log(data)
      try {
         var selectImage = []
         if (image) {
            for (let i = 0; i < image.length; i++) {
               const imageList = new FormData();
               imageList.append("file", image[i]);
               imageList.append("upload_preset", "webx_webx");
               imageList.append("cloud_name", "dcaocdvww");
               const res = await fetch('https://api.cloudinary.com/v1_1/dcaocdvww/image/upload', {
                  method: "POST",
                  body: imageList
               })
               const cloudData = await res.json();
               selectImage.push({ public_id: cloudData.public_id, url: cloudData.url })
            }
         }

         if (edit && id) {
            const imageData = Object.keys(selectImage).length > 0 ? selectImage : prevImage
            const response = await axiosInstance.put(`/advertisement/update-advertisement/${id}`, { ...data, images: imageData })
            console.log('update =>', response)
            toast('update banner')
         } else {
            const response = await axiosInstance.post(`/advertisement/add-advertisement`, { ...data, images: selectImage })
            console.log('create =>', response)
            toast('add advertisement')
         }
      } catch (error) {
         console.log('An error occurred', error)
      }
   }
   async function getBanner() {
      try {
         const { data } = await axiosInstance.get(`/advertisement/read-advertisement/${id}`)
         console.log('success', data)
         setPrevImage(data.advertisement.images)
         for (const key in defaultValues) {
            setValue(key, data.advertisement[key])
         }
      } catch (error) {
         console.log(error.message)
      }
   }
   return (
      <div className='bg-white rounded p-4'>
         <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
            <fieldset>
               <label htmlFor="" className='text-sm text-slate-400 mb-2'>Title</label>
               <input type="text" {...register("title")} className='bg-transparent w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:border-slate-300 focus:outline-0 rounded-md px-3' />
            </fieldset>
            <fieldset>
               <label htmlFor="" className='text-sm text-slate-400 mb-2'>Slug</label>
               <input type="text" {...register("slug")} className='bg-transparent w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:border-slate-300 focus:outline-0 rounded-md px-3' />
            </fieldset>
            <fieldset>
               <label htmlFor="" className='text-sm text-slate-400 mb-2'>Tagline</label>
               <input type="text" {...register("tagline")} className='bg-transparent w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:border-slate-300 focus:outline-0 rounded-md px-3' />
            </fieldset>
            <fieldset>
               <label htmlFor="" className='block text-sm text-slate-400 mb-3'>Image</label>
               <div className="flex flex-wrap gap-2">
                  {
                     prevImage?.map((image, index) => (
                        <div key={index} className="w-40 border border-slate-200 rounded-md">
                           <Image src={image?.url} width={150} height={75} alt='' className='w-full h-auto' />
                        </div>
                     ))
                  }
                  {
                     image?.map((image, index) => (
                        <div key={index} className="w-40 border border-slate-200 rounded-md">
                           <Image src={image} width={150} height={75} alt='' className='w-full h-auto' />
                        </div>
                     ))
                  }
                  <div className="w-40">
                     <MultipleImageUpload onImage={(img) => setImage([...image, img])} aspect={2 / 1} />
                  </div>
               </div>

            </fieldset>
            <div className="">
               <button type='submit' className='border border-blue-400 rounded py-1 px-5'>Submit</button>
            </div>
         </form>
      </div>
   )
}

export default EditBanner