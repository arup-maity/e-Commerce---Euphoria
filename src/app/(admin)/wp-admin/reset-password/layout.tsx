import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
   title: 'reset password | flipkert',
   description: '...',
}
interface LayoutType {
   children: React.ReactNode;
}
const Layout: React.FC<LayoutType> = ({ children }) => {
   return (
      <div>
         {children}
      </div>
   )
}

export default Layout