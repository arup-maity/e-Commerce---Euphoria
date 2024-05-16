import { adminInstance } from '@/config/axios';
import { Offcanvas } from '@/ui-components'
import React from 'react'
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import Select from 'react-select';
import { toast } from 'sonner';

type Inputs = {
   fullName: string
   email: string
   role: string
}
interface PropsType {
   open: boolean
   setShowUpdate: React.Dispatch<React.SetStateAction<boolean>>
   selectedUser: object
}
const roleOptions = [
   { value: 'admin', label: 'Admin' },
   { value: 'superAdmin', label: 'superAdmin' },
]

const UpdateUser: React.FC<PropsType> = ({ open, setShowUpdate, selectedUser }) => {
   const defaultValues = {
      fullName: '',
      email: '',
      role: ''
   }
   const { register, control, handleSubmit, setValue } = useForm({ defaultValues })
   const onSubmit: SubmitHandler<Inputs> = async (data) => {
      try {
         const response = await adminInstance.post(`/user/update-role`, { id: selectedUser.id, role: data.role })
         toast(response.data?.message)
         setShowUpdate(!open)
      } catch (error) {
         console.log('API request error:', error);
      }
   }

   function handleOpen() {
      for (const key in defaultValues) {
         setValue(key, selectedUser[key])
      }
   }

   return (
      <div>
         <Offcanvas isOpen={open} onOpen={handleOpen} toggle={() => setShowUpdate(!open)}>
            <Offcanvas.Header toggle={() => setShowUpdate(!open)}>
               <h5 className='text-lg font-medium'>Update User</h5>
            </Offcanvas.Header>
            <Offcanvas.Body>
               <form onSubmit={handleSubmit(onSubmit)} className='w-full h-full flex flex-col'>
                  <div className="flex-grow space-y-4">
                     <fieldset>
                        <label htmlFor="" className='block text-sm text-gray-500 font-lato mb-1'>Full Name</label>
                        <input {...register("fullName")} className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-2' readOnly />
                     </fieldset>
                     <fieldset>
                        <label htmlFor="" className='block text-sm text-gray-500 font-lato mb-1'>Email</label>
                        <input {...register("email")} className='w-full h-10 text-base text-gray-500 font-lato border border-slate-200 focus:outline-0 rounded-md p-2' readOnly />
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
                     <button type='submit' className='basis-1/2 text-base bg-indigo-400 text-white border border-indigo-400 rounded py-1 px-4'>Update</button>
                     <button onClick={() => setShowUpdate(!open)} className='basis-1/2 text-base bg-gray-200 text-gray-600 border border-gray-200 rounded py-1 px-4'>Cancel</button>
                  </div>
               </form>
            </Offcanvas.Body>
         </Offcanvas>

      </div>
   )
}

export default UpdateUser