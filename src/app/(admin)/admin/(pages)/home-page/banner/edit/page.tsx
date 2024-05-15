'use client'
import ImageUpload from '@/admin-components/thumbnail/ImageUpload'
import { axiosInstance } from '@/config/axios'
import { useSearchParams } from 'next/navigation'
import React, { useLayoutEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { toast } from 'sonner';

const EditBanner = () => {
   const searchParams = useSearchParams()
   const edit = searchParams.get('edit')
   const id = searchParams.get('id')

   const [image, setImage] = useState('')
   const [prevImage, setPrevImage] = useState('')

   useLayoutEffect(() => {
      if (edit) {
         getBanner()
      }
   }, [id, edit])

   const defaultValues = {
      title: '',
      url: '',
      image: ''
   }
   const { register, handleSubmit, setValue, formState: { errors }, } = useForm({
      defaultValues
   })
   const onSubmit = async (data: any) => {
      console.log(data)
      try {
         var selectImage = {}
         if (image) {
            const thumbnailUpload = new FormData();
            thumbnailUpload.append("file", image);
            thumbnailUpload.append("upload_preset", "webx_webx");
            thumbnailUpload.append("cloud_name", "dcaocdvww");
            const res = await fetch('https://api.cloudinary.com/v1_1/dcaocdvww/image/upload', {
               method: "POST",
               body: thumbnailUpload
            })
            const cloudData = await res.json();
            selectImage = { public_id: cloudData.public_id, url: cloudData.url };
         }

         if (edit && id) {
            const imageData = Object.keys(selectImage).length > 0 ? selectImage : prevImage
            const response = await axiosInstance.put(`/banner/update-banner/${id}`, { ...data, image: imageData })
            console.log('success', response)
            toast('update banner')
         } else {
            const response = await axiosInstance.post(`/banner/add-banner`, { ...data, image: selectImage })
            console.log('success', response)
            toast('add banner')
         }
      } catch (error) {
         console.log('An error occurred', error)
      }
   }
   async function getBanner() {
      try {
         const { data } = await axiosInstance.get(`/banner/read-banner/${id}`)
         for (const key in defaultValues) {
            switch (key) {
               case "image":
                  setValue('image', data.banner.image?.url)
                  setPrevImage(data.banner.image?.url)
                  break;
               default:
                  setValue(key, data.banner[key])
                  break;
            }
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
               <label htmlFor="" className='text-sm text-slate-400 mb-2'>Link</label>
               <input type="text" {...register("url")} className='bg-transparent w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:border-slate-300 focus:outline-0 rounded-md px-3' />
            </fieldset>
            <fieldset>
               <label htmlFor="" className='block text-sm text-slate-400 mb-3'>Image</label>
               <ImageUpload image={prevImage} onImage={(e: any) => setImage(e)} />
            </fieldset>
            <div className="">
               <button type='submit' className='border border-blue-400 rounded py-1 px-5'>Submit</button>
            </div>
         </form>
      </div>
   )
}

export default EditBanner