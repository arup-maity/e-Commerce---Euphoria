import { productInstance } from '@/config/axios'
import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
interface IFormInput {
   title: string
   slug: string
   description: string
}
interface PropsType {
   isOpen: boolean;
   toggle: () => void;
}
const AddCategory: React.FC<PropsType> = ({ isOpen, toggle }) => {

   const { register, handleSubmit, reset } = useForm<IFormInput>()
   const onSubmit: SubmitHandler<IFormInput> = async (data) => {
      try {
         const res = await productInstance.post(`/add-category`, data);
         console.log('first success =>', res)
         toggle()
      } catch (error) {
         console.log('error', error)
      }
   }

   useEffect(() => {
      reset()
   }, [isOpen])

   if (!isOpen) return null;
   return (
      <div className='fixed flex justify-center items-center z-[1045] bg-black/40 w-full h-full top-0 left-0'>
         <div className="p-4">
            <div className='bg-white w-[600px] rounded p-4'>
               <div className="flex justify-between gap-4">
                  <h5 className='text-lg text-gray-600 font-medium mb-2'>Add Category</h5>
                  <div role='button' className="" onClick={toggle}>close</div>
               </div>
               <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4'>
                  <fieldset>
                     <label className='text-sm text-gray-500'>Name</label>
                     <input {...register("title")} className='w-full h-10 border border-slate-400 rounded p-2' />
                  </fieldset>
                  <fieldset>
                     <label className='text-sm text-gray-500'>Slug</label>
                     <input {...register("slug")} className='w-full h-10 border border-slate-400 rounded p-2' />
                  </fieldset>
                  <fieldset>
                     <label className='text-sm text-gray-500'>Description</label>
                     <input {...register("description")} className='w-full h-10 border border-slate-400 rounded p-2' />
                  </fieldset>
                  <fieldset>
                     <button type="submit" className='border border-slate-500 rounded-md py-1 px-4'>Add</button>
                  </fieldset>
               </form>
            </div>
         </div>
      </div>
   )
}

export default AddCategory