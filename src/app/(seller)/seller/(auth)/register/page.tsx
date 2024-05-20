'use client'
import FormOne from '@/admin-components/seller/steps/FormOne'
import FormTwo from '@/admin-components/seller/steps/FormTwo'
import FormThree from '@/admin-components/seller/steps/FormThree'
import Final from '@/admin-components/seller/steps/Final'
import { useRouter, useSearchParams } from 'next/navigation'
import { useLayoutEffect, useState } from 'react'
import { sellerInstance } from '@/config/axios'

const Register = () => {
   const router = useRouter()
   const step = Number(useSearchParams().get('step')) || 1
   const [tokenStep, setTokenStep] = useState(1)
   const [loading, setLoading] = useState(true)

   useLayoutEffect(() => {
      checkToken()
   }, [step])
   const RenderStep = () => {
      switch (step) {
         case 1:
            return <FormOne />
         case 2:
            return <FormTwo />
         case 3:
            return <FormThree />
         case 4:
            return <Final />
         default:
            return null;
      }
   };
   async function checkToken() {
      try {
         const { data } = await sellerInstance.get(`/register/check-token`)
         console.log('checkToken', data)
         if (data.success) {
            setTokenStep(data.tokenVerify.step)
         }
      } catch (error) {
         router.push('/seller/register?step=1')
         console.log('error', error)
      }
      finally {
         setLoading(false)
      }
   }
   if (loading) {
      return (
         <div>Loading...</div>
      )
   }
   if (step !== tokenStep) {
      return router.push(`/seller/register?step=${tokenStep}`)
   }
   return (
      <div className='max-w-3xl mx-auto p-4'>
         <div className="w-full flex mb-4">
            <div className="w-3/12 relative p-6">
               <div className={`${step >= 1 ? 'bg-indigo-400' : 'bg-gray-400'} w-6 h-6 my-0 text-xs font-semibold text-white text-center leading-6  mx-auto rounded-full`}><span>1</span></div>
               <div className="text-sm text-gray-500 font-medium text-center mt-2">Basic Details</div>
               <div className={`absolute top-9 left-[50%] right-0 ml-5 h-[1px] border-t-2 ${step >= 1 ? 'border-indigo-300' : 'border-gray-300'}`}></div>
            </div>
            <div className="w-3/12 relative p-6">
               <div className={`${step >= 2 ? 'bg-indigo-400' : 'bg-gray-400'} w-6 h-6 my-0 text-xs font-semibold text-white text-center leading-6  mx-auto rounded-full`}><span>2</span></div>
               <div className="text-sm text-gray-500 font-medium text-center mt-2">Store Details</div>
               <div className={`absolute top-9 left-0 right-[50%] mr-5 h-[1px] border-t-2 ${step >= 1 ? 'border-indigo-300' : 'border-gray-300'}`}></div>
               <div className={`absolute top-9 left-[50%] right-0 ml-5 h-[1px] border-t-2 ${step >= 2 ? 'border-indigo-300' : 'border-gray-300'}`}></div>
            </div>
            <div className="w-3/12 relative p-6">
               <div className={`${step >= 3 ? 'bg-indigo-400' : 'bg-gray-400'} w-6 h-6 my-0 text-xs font-semibold text-white text-center leading-6  mx-auto rounded-full`}><span>3</span></div>
               <div className="text-sm text-gray-500 font-medium text-center mt-2">Bank Details</div>
               <div className={`absolute top-9 left-0 right-[50%] mr-5 h-[1px] border-t-2 ${step >= 2 ? 'border-indigo-300' : 'border-gray-300'}`}></div>
               <div className={`absolute top-9 left-[50%] right-0 ml-5 h-[1px] border-t-2 ${step >= 3 ? 'border-indigo-300' : 'border-gray-300'}`}></div>
            </div>
            <div className="w-3/12 relative p-6">
               <div className={`${step >= 4 ? 'bg-indigo-400' : 'bg-gray-400'} w-6 h-6 my-0 text-xs font-semibold text-white text-center leading-6  mx-auto rounded-full`}><span>4</span></div>
               <div className="text-sm text-gray-500 font-medium text-center mt-2">Final</div>
               <div className={`absolute top-9 left-0 right-[50%] mr-5 h-[1px] border-t-2 ${step >= 3 ? 'border-indigo-300' : 'border-gray-300'}`}></div>
            </div>
         </div>
         <div className="">
            <RenderStep />
         </div>
      </div >
   )
}

export default Register