// 
import { cookies } from 'next/headers'
export async function adminAuth() {
   const cookieStore = cookies()
   const token = cookieStore.get('token')?.value

   const options = {
      headers: {
         'Authorization': `Bearer ${token}`
      }
   };
   const url = process.env.NEXT_PUBLIC_API_URL + `/auth/seller-auth`

   const response = await fetch(url, options)
   const json = await response.json()
   console.log('authentication => ', json)
   if (json.success) {
      return { login: true, ...json.payload }
   } else {
      return { login: false, ...json.payload }
   }

}