'use client'
import { axiosInstance } from '@/config/axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useLayoutEffect, useState } from 'react'

const Advertisement = () => {
   const [advertisementList, setAdvertisementList] = useState([])

   useLayoutEffect(() => {
      getAdvertisementList()
   }, [])

   async function getAdvertisementList() {
      try {
         const { data } = await axiosInstance.get(`/advertisement/all-advertisement`)
         setAdvertisementList(data?.advertisement)
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <div className='bg-white p-4'>
         <table className='w-full'>
            <thead>
               <tr className=' text-left'>
                  <th>title</th>
                  <th>Slug</th>
                  <th>Tagline</th>
                  <th>Option</th>
               </tr>
            </thead>
            <tbody>
               {
                  advertisementList?.map((advertisement: any, index) => {
                     return (
                        <tr key={index}>
                           {/* <td>
                              <Image src={banner?.image?.url} width={100} height={100} alt='' />
                           </td> */}
                           <td>{advertisement?.title}</td>
                           <td>{advertisement?.slug}</td>
                           <td>{advertisement?.tagline}</td>
                           <td>
                              <Link href={`/admin/home-page/top-brands/edit?edit=true&id=${advertisement?.id}`}>Edit</Link>
                              <button>Delete</button>
                           </td>
                        </tr>
                     )
                  })
               }
            </tbody>
         </table>
      </div>
   )
}

export default Advertisement