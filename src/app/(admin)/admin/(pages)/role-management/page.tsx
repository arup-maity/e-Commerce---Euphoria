'use client'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
type Inputs = {
   example: string
   exampleRequired: string
}

const RoleManagement = () => {

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<Inputs>()
   const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

   return (
      <div className='bg-white rounded p-4'>
         <form onSubmit={handleSubmit(onSubmit)}>

            <input type='checkbox' value='access'/>
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
         </form>
      </div>
   )
}

export default RoleManagement