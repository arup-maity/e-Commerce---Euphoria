import { adminAuth } from '@/admin-components/authentication'
import React from 'react'

const Dashboard = () => {
   const auth = adminAuth()
   return (
      <div>Dashboard</div>
   )
}

export default Dashboard