'use client'
import AddCategory from '@/admin-components/admin/product/AddCategory';
import CategoryTable from '@/admin-components/admin/product/CategoryTable';
import { productInstance } from '@/config/axios';
import React, { useLayoutEffect, useState } from 'react'

const Category: React.FC = () => {

   const [isOpen, setIsOpen] = useState(false)
   const [data, setData] = useState([])

   useLayoutEffect(() => {
      allCategory()
   }, [])

   async function allCategory() {
      try {
         const { data } = await productInstance.get("/all-categories");
         if (data.success) {
            setData(data.categories)
         }
      } catch (error) {
         console.log('error', error);
      }
   }
   async function deleteCategory(id: number) {
      try {
         const { data } = await productInstance.delete(`/delete-category/${id}`);
         if (data.success) {
            allCategory()
         }
      } catch (error) {
         console.log('error', error);
      }
   }

   const columns = [
      {
         title: 'Title',
         dataIndex: 'title',
         sortable: true,
      },
      {
         title: 'Slug',
         dataIndex: 'slug',
      },
      {
         title: 'Description',
         dataIndex: 'description',
      },
      {
         title: 'Operations',
         dataIndex: '',
         render: (record) => (
            <>
               <button className='me-4' onClick={() => console.log('record', record)}>Edit</button>
               <button className='me-4' onClick={() => deleteCategory(record.id)}>Delete</button>
               <button onClick={() => console.log('record', record)}>View</button>
            </>
         ),
      },
   ];

   return (
      <div className='bg-white p-4'>
         <div className="flex justify-end mb-10">
            <button className='border border-slate-500 rounded py-1 px-4' onClick={() => setIsOpen(prev => !prev)}>Add Category</button>
         </div>
         <CategoryTable columns={columns} data={data} />
         <AddCategory isOpen={isOpen} toggle={() => { setIsOpen(prev => !prev); allCategory() }} />
      </div>
   )
}

export default Category