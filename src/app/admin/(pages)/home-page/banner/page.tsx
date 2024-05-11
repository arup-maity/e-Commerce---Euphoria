'use client'
import { axiosInstance } from '@/config/axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useLayoutEffect, useState } from 'react'

const Banner = () => {
   const [bannerList, setBannerList] = useState([])

   useLayoutEffect(() => {
      getBannerList()
   }, [])

   async function getBannerList() {
      try {
         const { data } = await axiosInstance.get(`/banner/all-banners`)
         setBannerList(data?.banners)
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <div className='bg-white p-4'>
         <table className='w-full'>
            <thead>
               <tr className=' text-left'>
                  <th>Image</th>
                  <th>title</th>
                  <th>Link</th>
                  <th>Option</th>
               </tr>
            </thead>
            <tbody>
               {
                  bannerList?.map((banner: any, index) => {
                     return (
                        <tr key={index}>
                           <td>
                              <Image src={banner?.image?.url} width={100} height={100} alt='' />
                           </td>
                           <td>{banner?.title}</td>
                           <td>{banner?.url}</td>
                           <td>
                              <Link href={`/admin/home-page/banner/edit?edit=true&id=${banner?.id}`}>Edit</Link>
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

export default Banner