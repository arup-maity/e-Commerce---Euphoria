'use client'
import { useSession } from '@/config/Context'
import React from 'react'

const Users = () => {
   const auth = useSession()
   console.log('Auth session', auth)
   return (
      <div>Users</div>
   )
}

export default Users