'use client'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import Select from 'react-select';
import { useForm, useFieldArray, Controller } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { productInstance } from '@/config/axios';
import Image from 'next/image';
import axios from 'axios';


const AddProduct = () => {
   const [thumbnailBlob, setThumbnailBlob] = useState('')
   const [thumbnailImage, setThumbnailImage] = useState('')
   const [selectedFiles, setSelectedFiles] = useState([]);
   const [imageList, setImageList] = useState([]);

   const [categoryList, setCategoryList] = useState([])
   const schema = z.object({
      title: z.string().min(1, { message: "This field has to be filled." }),
      slug: z.string().min(1, { message: "This field has to be filled." }),
      description: z.string().min(1, { message: "This field has to be filled." }),
   });
   const { register, control, handleSubmit, formState: { errors }, } = useForm({
      defaultValues: {
         title: '',
         slug: '',
         description: '',
         category: [],
         gallery: []
      },
      // resolver: zodResolver(schema),
   })

   useLayoutEffect(() => {
      getCategoryList()
   }, [])

   const onSubmit = async (data: any) => {
      console.log(data)
      try {
         const gallery = []
         for (let i = 0; i < selectedFiles.length; i++) {
            const data = new FormData();
            data.append("file", selectedFiles[i]);
            data.append("upload_preset", "webx_webx");
            data.append("cloud_name", "dcaocdvww");
            const res = await fetch('https://api.cloudinary.com/v1_1/dcaocdvww/image/upload', {
               method: "POST",
               body: data
            })
            const cloudData = await res.json();
            gallery.push({ public_id: cloudData.public_id, url: cloudData.url }); // Append each image with a bracketed "file[]" key
         }

         const thumbnailUpload = new FormData();
         thumbnailUpload.append("file", thumbnailImage);
         thumbnailUpload.append("upload_preset", "webx_webx");
         thumbnailUpload.append("cloud_name", "dcaocdvww");
         const res = await fetch('https://api.cloudinary.com/v1_1/dcaocdvww/image/upload', {
            method: "POST",
            body: thumbnailUpload
         })
         const cloudData = await res.json();
         const thumbnail = { public_id: cloudData.public_id, url: cloudData.url };

         const response = await productInstance.post(`/add-product`, { ...data, gallery, thumbnail });
         console.log(response);
      } catch (error: any) {
         console.log(error.message)
      }
   }

   async function getCategoryList() {
      try {
         const { data } = await productInstance.get(`/all-categories`)
         if (data.success) {
            const categorieslist: any[] = [];
            data.categories?.map(function (item) {
               categorieslist.push({ label: item.title, value: item.id })
            })
            setCategoryList(categorieslist)
         }
      } catch (error) {
         console.log('error', error)
      }
   }

   const handleFileChange = (event) => {
      const files = event.target.files;
      if (!files.length) return; // Handle empty selection gracefully

      // Validate file type (optional)
      const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
      const invalidFiles = Array.from(files).filter((file) => !validTypes.includes(file.type));
      if (invalidFiles.length) {
         console.error(`Invalid file type(s): ${invalidFiles.map((file) => file.name).join(', ')}`);
         return; // Prevent invalid images from being added
      }

      const imageURLs = Array.from(files).map((file) => URL.createObjectURL(file)); // Create image URLs
      setImageList((prevList) => [...prevList, ...imageURLs]); // Update image list with new previews
      setSelectedFiles(files); // Update selected files list
   };

   const handleRemoveImage = (index) => {
      const updatedImageList = [...imageList];
      updatedImageList.splice(index, 1);
      setImageList(updatedImageList);

      const updatedFiles = [...selectedFiles];
      updatedFiles.splice(index, 1);
      setSelectedFiles(updatedFiles);
   };

   const handleThumbnail = (event) => {
      setThumbnailBlob(URL.createObjectURL(event.target.files[0]))
      setThumbnailImage(event.target.files[0])
   }

   return (
      <div className='bg-white p-4'>
         <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            <div className="flex flex-wrap -m-4">
               <div className="w-full lg:w-3/12 p-4">
                  <label htmlFor="" className='text-sm text-slate-400 mb-2'>Thumbnail Image</label>
                  <div className="relative w-52 aspect-[4/4] text-gray-50 border border-dashed">
                     {
                        thumbnailBlob && <Image src={thumbnailBlob} width={100} height={125} alt='' className='w-full h-full object-contain' />
                     }
                     <div className="flex items-center  justify-center absolute inset-0 w-full h-full z-10">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"></path></svg>
                        <input type="file" onChange={handleThumbnail} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-50" />
                     </div>
                  </div>
               </div>
               <div className="w-full lg:w-9/12 p-4">
                  <fieldset>
                     <label htmlFor="" className='text-sm text-slate-400 mb-2'>Title</label>
                     <input defaultValue="" {...register("title")} className='bg-transparent w-full h-11 text-xl text-gray-500 font-lato border border-slate-200 focus:border-slate-300 focus:outline-0 rounded-md px-3' />
                     {errors.title && <p className='text-sm text-red-500 mt-1'>{errors.title?.message}</p>}
                  </fieldset>
                  <fieldset>
                     <label htmlFor="" className='text-sm text-slate-400 mb-2'>Slug</label>
                     <input defaultValue="" {...register("slug")} className='bg-transparent w-full h-11 text-xl text-gray-500 font-lato border border-slate-200 focus:border-slate-300 focus:outline-0 rounded-md px-3' />
                     {errors.slug && <p className='text-sm text-red-500 mt-1'>{errors.slug?.message}</p>}
                  </fieldset>
               </div>
            </div>
            <fieldset>
               <label htmlFor="" className='text-sm text-slate-400 mb-2'>Description</label>
               <textarea rows={5} defaultValue="" {...register("description")} className='bg-transparent w-full text-xl text-gray-500 font-lato border border-slate-200 focus:border-slate-300 focus:outline-0 rounded-md px-3' />
               {errors.description && <p className='text-sm text-red-500 mt-1'>{errors.description?.message}</p>}
            </fieldset>
            <fieldset>
               <label htmlFor="" className='text-sm text-slate-400 mb-2'>Category</label>
               <Controller
                  name="category"
                  control={control}
                  render={({ field: { value, onChange } }) =>
                     <Select
                        instanceId='blog-category'
                        isMulti
                        options={categoryList}
                        value={categoryList?.filter((obj) => value.includes(obj.value))}
                        onChange={(e) => onChange(Array.isArray(e) ? e.map(x => x.value) : [])}
                     />
                  }
               />
            </fieldset>
            <div>
               <label htmlFor="" className='text-sm text-slate-400 mb-2'>Product Images</label>
               <ul className='flex flex-wrap gap-4'>
                  {imageList.length > 0 && (
                     imageList.map((imageURL, index) => (
                        <li key={index} className='relative w-28 aspect-[4/5] bg-gray-100 rounded group'>
                           <Image src={imageURL} alt="Preview" width={100} height={100} className='w-full h-full object-contain' />
                           <button onClick={() => handleRemoveImage(index)} className='hidden group-hover:block absolute top-1 right-1 z-10 bg-gray-200 rounded-full'>
                              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368 144 144m224 0L144 368"></path></svg>
                           </button>
                        </li>
                     ))
                  )}
                  <li className='relative'>
                     <div className="w-28 aspect-[4/5] flex justify-center items-center bg-gray-50 border border-dashed rounded" >
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeWidth="2" d="M1,21 L1,7 L6,7 L8,3 L16,3 L18,7 L23,7 L23,21 L1,21 Z M12,18 C14.7614237,18 17,15.7614237 17,13 C17,10.2385763 14.7614237,8 12,8 C9.23857625,8 7,10.2385763 7,13 C7,15.7614237 9.23857625,18 12,18 Z"></path></svg>
                     </div>
                     <input type="file" multiple onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-50" />
                  </li>
               </ul>
            </div>
            <div className="">
               <button type='submit' className='bg-blue-500 text-white py-1 px-4'>Save</button>
            </div>
         </form>
      </div>
   )
}

export default AddProduct




// {
//    "asset_id": "064a74ec04301617ca53efc55fb5c829",
//    "public_id": "webx/rge300fw6csq8zjbaqf3",
//    "version": 1715167009,
//    "version_id": "d341eaaa25f110dc8f8508e45fea2666",
//    "signature": "b2522cc57a341f79a547808063ae6944ca7d371e",
//    "width": 640,
//    "height": 427,
//    "format": "jpg",
//    "resource_type": "image",
//    "created_at": "2024-05-08T11:16:49Z",
//    "tags": [],
//    "bytes": 82393,
//    "type": "upload",
//    "etag": "ca3dcec4c2a403ed21277004f0a5f5b6",
//    "placeholder": false,
//    "url": "http://res.cloudinary.com/dcaocdvww/image/upload/v1715167009/webx/rge300fw6csq8zjbaqf3.jpg",
//    "secure_url": "https://res.cloudinary.com/dcaocdvww/image/upload/v1715167009/webx/rge300fw6csq8zjbaqf3.jpg",
//    "folder": "webx",
//    "original_filename": "animal (2)"
// }