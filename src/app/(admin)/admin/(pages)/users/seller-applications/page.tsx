'use client'
import React, { useLayoutEffect, useState } from 'react'
import { adminInstance } from '@/config/axios'
import { LiaUserEditSolid } from "react-icons/lia";
import { RiDeleteBinLine } from "react-icons/ri";
import Link from 'next/link';
const SellerApplications = () => {
   const [applicationsList, setApplicationList] = useState([])
   const [totalApplications, setTotalApplications] = useState(0)
   useLayoutEffect(() => {
      getApplication()
   }, [])
   async function getApplication() {
      try {
         const { data } = await adminInstance.get(`/user/seller-applications`)
         if (data.success) {
            setApplicationList(data.applications)
            setTotalApplications(data.count)
         }
      } catch (error) {
         console.log('error', error)
      }
   }

   return (
      <div className='bg-white rounded p-4'>
         <table className='w-full border'>
            <thead>
               <tr className='text-left'>
                  <th className='p-2'>Name</th>
                  <th className='p-2'>Email</th>
                  <th className='p-2'>Option</th>
               </tr>
            </thead>
            <tbody>
               {applicationsList.map((application, index) => (
                  <tr key={index} className='border0'>
                     <td className='p-2'>{application.fullName}</td>
                     <td className='p-2'>{application.email}</td>
                     <th>
                        <ul className='flex items-center gap-2 *:bg-slate-200 *:w-9 *:h-9 *:flex *:items-center *:justify-center *:text-slate-600 *:rounded-full'>
                           <li><Link href={`/admin/users/seller-applications/${application?.id}`}><LiaUserEditSolid size='22' /></Link></li>
                           <li role='button'><RiDeleteBinLine size='19' /></li>
                        </ul>
                     </th>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   )
}

export default SellerApplications