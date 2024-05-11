'use client'
import React, { useState } from 'react'
import { createPortal } from "react-dom";
import ImageCropper from './ImageCropper'
import Image from 'next/image'

interface PropType {
   image: string;
   onImage: (value: string) => void;
}
const ImageUpload = ({ image = '', onImage }) => {

   const [blob, setBlob] = useState(null)
   const [inputImg, setInputImg] = useState('')
   const [modalOpen, modalClose] = useState(false)

   const getBlob = (blob) => {
      // pass blob up from the ImageCropper component
      setBlob(blob)
   }

   const handleCrop = () => {
      onImage(blob)
      modalClose(prev => !prev)
   }

   const onInputChange = (e) => {
      // convert image file to base64 string
      const file = e.target.files[0]
      const reader = new FileReader()

      reader.addEventListener('load', () => {
         setInputImg(reader.result)
      }, false)

      if (file) {
         reader.readAsDataURL(file)
      }
      modalClose(prev => !prev)
   }

   return (
      <>
         <div className="">
            <div className="relative w-6/12 aspect-[21/9] border border-dashed">
               {
                  blob ? <Image src={blob} width={100} height={125} alt='' className='w-full h-full object-contain' /> :
                     (
                        image && < Image src={image} width={100} height={125} alt='' className='w-full h-full object-contain' />
                     )
               }
               <div className="flex items-center  justify-center absolute inset-0 w-full h-full z-10">
                  <span className='bg-gray-50 text-gray-300 p-2 rounded-full'>
                     <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"></path></svg>
                  </span>
                  <input type="file" onChange={onInputChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-50" />
               </div>
            </div>
         </div>
         {
            modalOpen &&
            createPortal(
               <div className="">
                  <div className="fixed w-screen h-screen top-0 left-0 flex items-center justify-center z-[1050]">
                     <div className="w-[800px] max-w-full h-[400px] max-h-full flex flex-col bg-white rounded p-4">
                        <div className="relative flex-grow">
                           {
                              inputImg && (
                                 <ImageCropper
                                    getBlob={getBlob}
                                    inputImg={inputImg}
                                 />
                              )
                           }
                        </div>
                        <div className="flex justify-end p-2">
                           <button onClick={handleCrop} className='border border-gray-400 rounded py-1 px-4'>Done</button>
                        </div>
                     </div>
                  </div>
                  <div className="fixed top-0 left-0 w-screen h-screen bg-[#000] transition-opacity duration-300 ease-linear z-[1040] opacity-40"></div>
               </div>
               , document.body)
         }
      </>
   )
}

export default ImageUpload

