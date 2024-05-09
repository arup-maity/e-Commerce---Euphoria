'use client'
import React, { useEffect } from 'react'
import Select from 'react-select';
import { useForm, SubmitHandler, useFieldArray, Controller } from "react-hook-form"
import AttributeInput from '@/admin-components/product/AttributeInput';


const options = [
   { value: 'chocolate', label: 'Chocolate' },
   { value: 'strawberry', label: 'Strawberry' },
   { value: 'vanilla', label: 'Vanilla' },
];

const AddProduct = () => {

   useEffect(() => {

   }, [])

   const {
      register,
      control,
      handleSubmit,
      formState: { errors },
   } = useForm({
      defaultValues: {
         variants: [
            {
               title: "",
               attribute: [{ id: "", value: "" }]
            }
         ]
      }
   })

   const { fields, append, remove } = useFieldArray({
      control,
      name: "variants"
   });

   const onSubmit = async (data) => {
      console.log(data)
   }

   return (
      <div className='bg-white p-4 rounded-md'>
         <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            <fieldset>
               <label htmlFor="">Title</label>
               <input defaultValue="" {...register("title")} className='bg-transparent w-full h-11 text-xl text-gray-500 font-lato border border-slate-200 focus:border-slate-300 focus:outline-0 rounded-md px-3' />
               {/* <input type="text" name="" id="" className='bg-transparent w-full h-11 text-xl text-gray-500 font-lato border border-slate-200 focus:border-slate-300 focus:outline-0 rounded-md px-3' /> */}
            </fieldset>
            <fieldset>
               <label htmlFor="">Slug</label>
               <input defaultValue="" {...register("slug")} className='bg-transparent w-full h-11 text-xl text-gray-500 font-lato border border-slate-200 focus:border-slate-300 focus:outline-0 rounded-md px-3' />
            </fieldset>
            <fieldset>
               <label htmlFor="">Description</label>
               <textarea defaultValue="" {...register("description")} rows={5} className='bg-transparent w-full text-base text-gray-500 font-lato border border-slate-200 focus:border-slate-300 focus:outline-0 rounded-md p-3'></textarea>
            </fieldset>
            <fieldset>
               <label htmlFor="">Category</label>

               <Controller
                  name="firstName"
                  control={control}
                  render={({ field: { value, onChange } }) =>
                     <Select
                        value={value}
                        onChange={e => onChange(e.value)}
                        options={options}
                     />}
               />
            </fieldset>

            <ul className='space-y-5'>
               {fields.map((item, index) => (
                  <li key={item.id} className='space-y-3'>
                     {/* <input {...register(`variants.${index}.title`)} className='bg-transparent w-full h-11 text-xl text-gray-500 font-lato border border-slate-200 focus:border-slate-300 focus:outline-0 rounded-md px-3' />
                     {/*  */}
                     {/* <AttributeInput parentIndex={index} control={control} /> */}

                     <button type="button" onClick={() => remove(index)}>Delete</button>
                  </li>
               ))}
            </ul>
            <button
               type="button"
               onClick={() => append({ title: "title", attribute: [{ id: '55', value: "fmhbjhbj" }] })}
            >Append</button>

            <div className="">
               <button type="submit" className='border p-2'>Submit</button>
            </div>
         </form>
      </div>
   )
}

export default AddProduct