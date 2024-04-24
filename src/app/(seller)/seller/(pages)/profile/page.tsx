import { cookies } from 'next/headers'
import React from 'react'

async function getData() {
   const cookieStore = cookies()
   const token = cookieStore.get('token')?.value

   const options = {
      headers: {
         'Authorization': `Bearer ${token}`
      }
   };
   const url = process.env.NEXT_PUBLIC_API_URL + `/seller/seller-profile`

   const response = await fetch(url, options)
   const json = await response.json()
   return json
}
const Profile = async () => {
   const { profile } = await getData()



   return (
      <>
         <div>{profile?.fullName}</div>
         <div className="flex gap-5">
            <div>{profile?.email}</div>
            <div className="">
               <p className='text-blue-700'>Verify</p>
            </div>
         </div>
         <div className="">
            {/* <div dangerouslySetInnerHTML={{ __html: profile?.displayName }} /> */}
            {profile?.displayName}
         </div>
      </>
   )
}

export default Profile