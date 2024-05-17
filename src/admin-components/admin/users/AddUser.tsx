import { adminInstance } from '@/config/axios';
import { Offcanvas } from '@/ui-components'
import React, { useState } from 'react'
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import Select from 'react-select';
import { toast } from 'sonner';
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { generatePassword } from '@/utils';

type Inputs = {
   fullName: string
   email: string
   password: string
   role: string
}
interface PropsType {
   open: boolean
   setShowCreate: React.Dispatch<React.SetStateAction<boolean>>
}
const roleOptions = [
   { value: 'admin', label: 'Admin' },
   { value: 'superAdmin', label: 'superAdmin' },
]

const AddUser: React.FC<PropsType> = ({ open, setShowCreate }) => {
   const [showPassword, setShowPassword] = useState(false)
   const defaultValues = {
      fullName: '',
      email: '',
      password: '',
      role: 'admin'
   }
   const schema = z.object({
      fullName: z.string().min(1, { message: "This field has to be filled." }).regex(/^[a-zA-Z\s]*$/, {
         message: "Your name must only contain letters.",
      }),
      email: z.string().min(1, { message: "This field has to be filled." }).email("This is not a valid email."),
      password: z.string().min(1, { message: "This field has to be filled." }).regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/, {
         message: "Your password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.",
      }),
   });
   const { register, control, handleSubmit, setValue, reset, formState: { errors } } = useForm(
      { defaultValues, mode: 'onChange', resolver: zodResolver(schema) }
   )
   const onSubmit: SubmitHandler<Inputs> = async (data) => {
      console.log('onSubmit', data)
      try {
         const response = await adminInstance.post(`/user/add-user`, data)
         toast(response.data?.message)
         setShowCreate(!open)
      } catch (error) {
         console.log('API request error:', error);
      }
   }

   function handleGeneratePassword() {
      const password = generatePassword(12)
      setValue('password', password)
   }

   return (
      <div>
         <Offcanvas isOpen={open} onClose={reset} toggle={() => setShowCreate(!open)}>
            <Offcanvas.Header toggle={() => setShowCreate(!open)}>
               <h5 className='text-lg font-medium'>Add New User</h5>
            </Offcanvas.Header>
            <Offcanvas.Body>
               <form onSubmit={handleSubmit(onSubmit)} className='w-full h-full flex flex-col'>
                  <div className="flex-grow space-y-4">
                     <fieldset>
                        <label htmlFor="" className='block text-sm text-gray-500 font-lato mb-1'>Full Name</label>
                        <input {...register("fullName")} className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-2' autoComplete='off' />
                        {errors.fullName && <p className='text-sm text-red-500 font-lato mt-1'>{errors.fullName?.message}</p>}
                     </fieldset>
                     <fieldset>
                        <label htmlFor="" className='block text-sm text-gray-500 font-lato mb-1'>Email</label>
                        <input {...register("email")} className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-2' autoComplete='off' />
                        {errors.email && <p className='text-sm text-red-500 font-lato mt-1'>{errors.email?.message}</p>}
                     </fieldset>
                     <fieldset>
                        <label htmlFor="" className='block text-sm text-gray-500 font-lato mb-1'>Password</label>
                        <div className="relative">
                           <input type={showPassword ? 'text' : 'password'} {...register("password")} className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-2' autoComplete='off' />
                           <div role='button' className="absolute top-3 right-3" onClick={() => setShowPassword(prev => !prev)}>
                              {showPassword ? <IoEyeOutline size='18' /> : <IoEyeOffOutline size='18' />}
                           </div>
                        </div>
                        {errors.password && <p className='text-sm text-red-500 font-lato mt-1'>{errors.password?.message}</p>}
                        <div role='button' className="text-xs text-indigo-600 mt-2" onClick={handleGeneratePassword}>Generate Password</div>
                     </fieldset>
                     <fieldset>
                        <label htmlFor="" className='block text-sm text-gray-500 font-lato mb-1'>Role</label>
                        <Controller
                           name="role"
                           control={control}
                           defaultValue='admin'
                           render={({ field: { value, onChange } }) =>
                              <Select
                                 className="react-select"
                                 classNamePrefix="select"
                                 options={roleOptions}
                                 value={value ? roleOptions.filter(obj => obj.value === value) : ""}
                                 onChange={(e) => onChange(e.value)}
                              />
                           }
                        />
                     </fieldset>
                  </div>
                  <div className="flex items-center gap-2">
                     <button type='submit' className='basis-1/2 text-base bg-indigo-400 text-white border border-indigo-400 rounded py-1 px-4'>Create</button>
                     <button type='button' onClick={() => setShowCreate(!open)} className='basis-1/2 text-base bg-gray-200 text-gray-600 border border-gray-200 rounded py-1 px-4'>Cancel</button>
                  </div>
               </form>
            </Offcanvas.Body>
         </Offcanvas>
      </div>
   )
}

export default AddUser