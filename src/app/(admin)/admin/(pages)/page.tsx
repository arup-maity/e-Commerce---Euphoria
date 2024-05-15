'use client'
import { AuthContext, useSession } from '@/config/Context'
import React from 'react'

const AdminPage = () => {

   const auth = useSession()
   console.log('Auth session', auth)
   return (
      <div>AdminPage</div>
   )
}

export default AdminPage