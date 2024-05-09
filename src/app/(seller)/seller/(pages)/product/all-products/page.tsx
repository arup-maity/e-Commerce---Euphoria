'use client'
import { productInstance } from '@/config/axios'
import Image from 'next/image'
import React, { useLayoutEffect, useState } from 'react'

const AllProducts = () => {
   const [productList, setProductList] = useState([])

   useLayoutEffect(() => {
      getProducts()
   }, [])

   async function getProducts() {
      try {
         const response = await productInstance.get("all-products")
         if (response.data.success) {
            setProductList(response.data.products)
         }
      } catch (error: any) {
         console.log(error.message)
      }
   }
   async function handleDelete(value: any) {
      try {
         const response = await productInstance.delete(`/delete-product/${value.id}`)
         console.log(response)
         if (response.data.success) {
            getProducts()
         }
      } catch (error: any) {
         console.log(error.message)
      }
   }

   return (
      <div className='bg-white p-4'>
         <div className="">
            <table className='w-full'>
               <thead>
                  <tr>
                     <th className='text-left w-14 p-2'>Image</th>
                     <th className='text-left p-2'>Title</th>
                     <th className='text-left p-2'>Categories</th>
                     <th className='text-left p-2'>Option</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     productList?.map((product: any, index) => {
                        return (
                           <tr key={index}>
                              <td className='p-2'>
                                 <Image src={product?.thumbnail ? product?.thumbnail?.url : ""} width={80} height={80} alt='' className='w-12 h-12 rounded' />
                              </td>
                              <td className='p-2'>{product?.title}</td>
                              <td className='p-2'>
                                 <ul className='flex gap-1'>
                                    {product?.ProductCategoryRelationship?.map((category: any, index) => (
                                       <li key={index}>{category.category.title}{product?.ProductCategoryRelationship.length !== (index + 1) && ', '}</li>
                                    ))}
                                 </ul>
                              </td>
                              <td className='p-2'>
                                 <ul>
                                    <li>Edit</li>
                                    <li onClick={() => handleDelete(product)}>Delete</li>
                                 </ul>
                              </td>
                           </tr>
                        )
                     })
                  }
               </tbody>
            </table>
         </div>
      </div>
   )
}

export default AllProducts