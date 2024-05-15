'use client'
import React, { useLayoutEffect, useMemo } from "react";
import { axiosInstance } from "./axios";

type ContextType = {
   session?: object;
}
interface AuthType {
   children: React.ReactNode
}

export const AuthContext = React.createContext<ContextType>({});

export const AuthProvider: React.FC<AuthType> = ({ children }) => {
   const [session, setSession] = React.useState<object>({
      login: false,
      role: 'user'
   });

   useLayoutEffect(() => {
      toggle()
   }, [])

   async function toggle() {
      try {
         const { data } = await axiosInstance.get(`/auth/check-auth`)
         if (data?.success) {
            setSession({
               login: true,
               userId: data.user.id,
               role: data.user.role
            })
         }
      } catch (error) {
         console.log('Error', error)
      }
   }
   const dropdownContext = useMemo(() => ({ session, toggle }), [session]);
   return (
      <AuthContext.Provider value={dropdownContext}>
         {children}
      </AuthContext.Provider>
   )
}

export function useSession() {
   const { session } = React.useContext<ContextType>(AuthContext);
   return session
}