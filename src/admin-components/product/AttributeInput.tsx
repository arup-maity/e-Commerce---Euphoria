'use client'
import React from "react";
import { useFieldArray, Controller } from "react-hook-form"
import Select from 'react-select';

interface PropsType {
   parentIndex: number;
   control: any;
}

const AttributeInput: React.FC<PropsType> = ({ parentIndex, control }) => {
   const { fields, append, remove, move } = useFieldArray({
      control,
      name: `variants.${parentIndex}.attribute`
   });

   const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
   ];

   return (
      <ul>
         {
            fields.map((attribute, index) => (
               <li key={index} className="space-y-4">
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
                  <input className='bg-transparent w-full h-11 text-xl text-gray-500 font-lato border border-slate-200 focus:border-slate-300 focus:outline-0 rounded-md px-3' />
               </li>
            ))
         }
      </ul>
   )
}

export default AttributeInput