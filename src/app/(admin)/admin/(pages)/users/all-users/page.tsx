'use client'
import React, { useLayoutEffect, useState } from 'react'
import { adminInstance } from '@/config/axios'
import Image from 'next/image'
import Link from 'next/link'
import UpdateUser from '@/admin-components/admin/users/UpdateUser'
import { LiaUserEditSolid } from "react-icons/lia";
import { RiDeleteBinLine } from "react-icons/ri";
import { useSession } from '@/config/Context'
import { notFound } from 'next/navigation'


const AllUsers = () => {
   const auth = useSession()

   const [userList, setUserList] = useState([])
   const [userCount, setUserCount] = useState(0)
   const [showUpdate, setShowUpdate] = useState(false)
   const [selectedUser, setSelectedUser] = useState({})

   useLayoutEffect(() => {
      getAllUsers()
   }, [])

   async function getAllUsers() {
      try {
         const { data } = await adminInstance(`/user/all-users`)
         if (data.success) {
            setUserList(data.users)
            setUserCount(data.count)
         }
      } catch (error) {

      }
   }

   // if (auth?.role !== 'administrator') {
   //    return notFound()
   // }
   return (
      <div className='bg-white rounded p-4'>
         <div className="mb-5">
            <div className="flex justify-between items-center">
               <p className='text-gray-500'>Total Users : {userCount}</p>
               <Link href='/admin/users/add-user' className='border border-slate-500 rounded py-1 px-4'>Add User</Link>
            </div>
         </div>
         <table className='w-full border'>
            <thead>
               <tr className='text-left'>
                  <th className='p-2'>image</th>
                  <th className='p-2'>Name & email</th>
                  <th className='p-2'>Options</th>
               </tr>
            </thead>
            <tbody>
               {
                  userList?.map((user) =>
                     <tr key={user?.id} className='border'>
                        <td className='p-2'>
                           <div className="">
                              <Image src={user?.profileImage} width={50} height={50} alt='' />
                           </div>
                        </td>
                        <td className='p-2'>
                           <p>{user?.fullName}</p>
                           <p>{user?.email}</p>
                        </td>
                        <td className='p-2'>
                           <ul className='flex items-center gap-2 *:bg-slate-200 *:w-9 *:h-9 *:flex *:items-center *:justify-center *:text-slate-600 *:rounded-full'>
                              <li role='button' onClick={() => { setSelectedUser(user); setShowUpdate(prev => !prev) }}><LiaUserEditSolid size='22' /></li>
                              <li role='button'><RiDeleteBinLine size='19' /></li>
                           </ul>
                        </td>
                     </tr>
                  )
               }
            </tbody>
         </table>
         <UpdateUser open={showUpdate} setShowUpdate={setShowUpdate} selectedUser={selectedUser} />
      </div>
   )
}

export default AllUsers