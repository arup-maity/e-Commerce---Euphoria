import React from 'react'
interface PropsType {
   columns: any[];
   data: string[];
   sort?: (value: object) => void;
}
const CategoryTable: React.FC<PropsType> = ({ columns = [], data = [], sort }) => {
   const sortData = (columnName: string, sortOrder: string) => {
      sort({ column: columnName, sortOrder: sortOrder })
   };
   return (
      <table className='w-full'>
         <thead>
            <tr>
               {columns.map((column: any) => (
                  <th key={column.title} className='text-left'>
                     {column.title}
                     {column.sortable && (
                        <span className='ms-4'>
                           <button onClick={() => sortData(column.dataIndex, 'asc')}>
                              &#8593;
                           </button>
                           <button onClick={() => sortData(column.dataIndex, 'desc')}>
                              &#8595;
                           </button>
                        </span>
                     )}
                  </th>
               ))}
            </tr>
         </thead>
         <tbody>
            {data.map((row, index) => (
               <tr key={index}>
                  {columns.map((column: any) => (
                     <td key={column.title}>
                        {column.dataIndex ? row[column.dataIndex] : column.render(row)}
                     </td>
                  ))}
               </tr>
            ))}
         </tbody>
      </table>
   )
}

export default CategoryTable