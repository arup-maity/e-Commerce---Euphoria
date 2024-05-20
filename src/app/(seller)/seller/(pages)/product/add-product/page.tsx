'use client'
import React, { useLayoutEffect, useState } from 'react'
import Select from 'react-select';
import { useForm, useFieldArray, Controller } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { toast } from 'sonner';
import { productInstance } from '@/config/axios';
import Image from 'next/image';
// import EditorPage from '@/admin-components/editor/Editor';
import { useSearchParams } from 'next/navigation'
import dynamic from "next/dynamic";

const EditorPage = dynamic(() => import("@/admin-components/editor/Editor"), { ssr: false });

const AddProduct = () => {
   const searchParams = useSearchParams()
   const edit = searchParams.get('edit')
   const id = searchParams.get('id')

   const [productData, setProductData] = useState<any>({})
   const [productGallery, setProductGallery] = useState([])

   const [thumbnailBlob, setThumbnailBlob] = useState('')
   const [thumbnailImage, setThumbnailImage] = useState('')
   const [selectedFiles, setSelectedFiles] = useState([]);
   const [imageList, setImageList] = useState([]);

   const [categoryList, setCategoryList] = useState([])
   const [tagList, setTagList] = useState([])
   const defaultValues = {
      title: '',
      slug: '',
      shortDescription: '',
      description: '',
      price: 0,
      regularPrice: 0,
      sku: '',
      stock: 'active',
      category: [],
      tags: [],
      gallery: []
   }
   const schema = z.object({
      title: z.string(),
      slug: z.string(),
      shortDescription: z.string(),
      description: z.string(),
      price: z.number(),
      regularPrice: z.number(),
      sku: z.string(),
      stock: z.string(),
      category: z.array(z.number()).min(1, { message: "This field has to be filled" }),
      tags: z.array(z.number()),
      gallery: z.array(z.string())
   });
   const { register, control, handleSubmit, setValue, watch, formState: { errors }, } = useForm({
      defaultValues,
      // resolver: zodResolver(schema),
   })
   useLayoutEffect(() => {
      getCategoryList()
      getTagList()
      getProduct()
   }, [])

   const onSubmit = async (data: any) => {
      console.log(data)
      try {
         const gallery = []
         if (selectedFiles.length > 0) {
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
         }
         var thumbnail = {}
         if (thumbnailImage) {
            const thumbnailUpload = new FormData();
            thumbnailUpload.append("file", thumbnailImage);
            thumbnailUpload.append("upload_preset", "webx_webx");
            thumbnailUpload.append("cloud_name", "dcaocdvww");
            const res = await fetch('https://api.cloudinary.com/v1_1/dcaocdvww/image/upload', {
               method: "POST",
               body: thumbnailUpload
            })
            const cloudData = await res.json();
            thumbnail = { public_id: cloudData.public_id, url: cloudData.url };
         }

         if (edit) {
            const thumbnailData = Object.keys(thumbnail).length > 0 ? thumbnail : productData.thumbnail
            const oldCatgeory = productData.ProductCategoryRelationship.map(item => item.categoryId);
            const update = await productInstance.post(`/update-product`, { ...data, id: productData.id, gallery: [...productGallery, ...gallery], oldGallery: productData.gallery, thumbnail: thumbnailData, oldThumbnail: productData.thumbnail, oldCatgeory })
            console.log('Update', update);
            toast('Update Product')
         } else {
            //    const response = await productInstance.post(`/add-product`, { ...data, gallery, thumbnail });
            //    console.log(response);
            //    toast('My first toast')
         }
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
   async function getTagList() {
      try {
         const { data } = await productInstance.get(`/all-categories`)
         if (data.success) {
            const categorieslist: any[] = [];
            data.categories?.map(function (item) {
               categorieslist.push({ label: item.title, value: item.id })
            })
            setTagList(categorieslist)
         }
      } catch (error) {
         console.log('error', error)
      }
   }

   async function getProduct() {
      try {
         // if(edit) {

         // }
         const { data } = await productInstance.get(`/get-edit-product/${id}`)
         if (data.success) {
            console.log(data)
            setProductData(data.product)
            setProductGallery(data.product?.gallery)
            for (const key in defaultValues) {
               switch (key) {
                  case "price": setValue('price', data.product?.price?.price)
                     break;
                  case "regularPrice": setValue('regularPrice', data.product?.price?.regularPrice)
                     break;
                  case "category": {
                     const categoryIds = data.product.ProductCategoryRelationship.map(item => item.categoryId);
                     setValue('category', categoryIds)
                  }
                     break;
                  default:
                     setValue(key, data.product[key])
                     break;
               }
            }
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
         // console.error(`Invalid file type(s): ${invalidFiles.map((file) => file.name).join(', ')}`);
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
   const handleRemoveFromGalley = (image) => {
      const filteredGallery = productGallery.filter(item => item.public_id !== image.public_id);
      setProductGallery(filteredGallery)
   }

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
                  <div className="relative w-full max-w-52 aspect-[4/4] text-gray-50 border border-dashed">
                     {
                        thumbnailBlob ? <Image src={thumbnailBlob} width={100} height={125} alt='' className='w-full h-full object-contain' /> :
                           <Image src={productData?.thumbnail?.url} width={100} height={125} alt='' className='w-full h-full object-contain' />
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
                     <input {...register("title")} className='bg-transparent w-full h-11 text-base text-gray-500 font-lato border border-slate-200 focus:border-slate-300 focus:outline-0 rounded-md px-3' />
                     {errors.title && <p className='text-sm text-red-500 mt-1'>{errors.title?.message}</p>}
                  </fieldset>
                  <fieldset>
                     <label htmlFor="" className='text-sm text-slate-400 mb-2'>Slug</label>
                     <input {...register("slug")} className='bg-transparent w-full h-11 text-base text-gray-500 font-lato border border-slate-200 focus:border-slate-300 focus:outline-0 rounded-md px-3' />
                     {errors.slug && <p className='text-sm text-red-500 mt-1'>{errors.slug?.message}</p>}
                  </fieldset>
               </div>
            </div>
            <fieldset>
               <label htmlFor="" className='text-sm text-slate-400 mb-2'>Short Description</label>
               <Controller
                  name='shortDescription'
                  control={control}
                  render={({ field: { onChange, value } }) => (
                     <EditorPage value={value} onChange={onChange} />
                  )}
               />
               {errors.shortDescription && <p className='text-sm text-red-500 mt-1'>{errors.shortDescription?.message}</p>}
            </fieldset>
            <div className="flex flex-wrap -m-2">
               <div className="w-full lg:w-6/12 space-y-3 p-2">
                  <fieldset>
                     <label htmlFor="" className='text-sm text-slate-400 mb-2'>Sale Price</label>
                     <input type='number' {...register("price", { valueAsNumber: true })} className='bg-transparent w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:border-slate-300 focus:outline-0 rounded-md px-3' />
                     {errors.price && <p className='text-sm text-red-500 mt-1'>{errors.price?.message}</p>}
                  </fieldset>
                  <fieldset>
                     <label htmlFor="" className='text-sm text-slate-400 mb-2'>Regular Price</label>
                     <input type='number' {...register("regularPrice", { valueAsNumber: true })} className='bg-transparent w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:border-slate-300 focus:outline-0 rounded-md px-3' />
                     {errors.regularPrice && <p className='text-sm text-red-500 mt-1'>{errors.regularPrice?.message}</p>}
                  </fieldset>
               </div>
               <div className="w-full lg:w-6/12 space-y-3 p-2">
                  <fieldset>
                     <label htmlFor="" className='text-sm text-slate-400 mb-2'>SKU</label>
                     <input {...register("sku")} className='bg-transparent w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:border-slate-300 focus:outline-0 rounded-md px-3' />
                     {/* {errors.regularPrice && <p className='text-sm text-red-500 mt-1'>{errors.regularPrice?.message}</p>} */}
                  </fieldset>
                  <fieldset>
                     <label htmlFor="" className='text-sm text-slate-400 mb-2'>In Stock</label>
                     <select {...register("stock")} className='bg-transparent w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:border-slate-300 focus:outline-0 rounded-md px-3'>
                        <option value="active">Stock</option>
                        <option value="inactive">Out of Stock</option>
                     </select>
                     {/* {errors.regularPrice && <p className='text-sm text-red-500 mt-1'>{errors.regularPrice?.message}</p>} */}
                  </fieldset>
               </div>
            </div>
            <div className="flex flex-wrap">
               <div className="w-full lg:w-6/12 space-y-3">
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
                     {errors.category && <p className='text-sm text-red-500 mt-1'>{errors.category?.message}</p>}

                  </fieldset>
                  <fieldset>
                     <label htmlFor="" className='text-sm text-slate-400 mb-2'>Tags</label>
                     <Controller
                        name="tags"
                        control={control}
                        render={({ field: { value, onChange } }) =>
                           <Select
                              instanceId='blog-tags'
                              isMulti
                              options={categoryList}
                              value={tagList?.filter((obj) => value.includes(obj.value))}
                              onChange={(e) => onChange(Array.isArray(e) ? e.map(x => x.value) : [])}
                           />
                        }
                     />
                  </fieldset>
               </div>
               <div className="w-full lg:w-6/12">

               </div>
            </div>
            <div>
               <label htmlFor="" className='text-sm text-slate-400 mb-2'>Product Images</label>
               <ul className='flex flex-wrap gap-4'>
                  {
                     productGallery.length > 0 && (
                        productGallery?.map((image, index) => (
                           <li key={index} className='relative w-28 aspect-[4/5] bg-gray-100 rounded group'>
                              <Image src={image?.url} alt="Preview" width={100} height={100} className='w-full h-full object-contain' />
                              <button type='button' onClick={() => handleRemoveFromGalley(image)} className='hidden group-hover:block absolute top-1 right-1 z-10 bg-gray-200 rounded-full'>
                                 <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368 144 144m224 0L144 368"></path></svg>
                              </button>
                           </li>
                        ))
                     )
                  }
                  {imageList.length > 0 && (
                     imageList.map((imageURL, index) => (
                        <li key={index} className='relative w-28 aspect-[4/5] bg-gray-100 rounded group'>
                           <Image src={imageURL} alt="Preview" width={100} height={100} className='w-full h-full object-contain' />
                           <button type='button' onClick={() => handleRemoveImage(index)} className='hidden group-hover:block absolute top-1 right-1 z-10 bg-gray-200 rounded-full'>
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
            <fieldset>
               <label htmlFor="" className='text-sm text-slate-400 mb-2'>Description</label>
               <Controller
                  name='description'
                  control={control}
                  render={({ field: { onChange, value } }) => (
                     <EditorPage value={value} onChange={onChange} />
                  )}
               />
               {errors.description && <p className='text-sm text-red-500 mt-1'>{errors.description?.message}</p>}
            </fieldset>
            <div className="">
               <button type='submit' className='bg-blue-500 text-white py-1 px-4'>Save</button>
            </div>
         </form>
      </div>
   )
}

export default AddProduct