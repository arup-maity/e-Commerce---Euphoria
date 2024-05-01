'use client'
import React, { useState } from 'react'
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductImage = () => {
   const images = ['/img-28.png', '/img-27.png', '/img-26.png', '/img-28.png', '/img-27.png', '/img-26.png', '/img-28.png', '/img-27.png', '/img-26.png', '/img-28.png', '/img-27.png', '/img-26.png']

   const [currentImage, setCurrentImage] = useState(images[0])



   return (
      <>
         <div className="w-full">
            <div className="flex flex-wrap">
               <div className="w-2/12 px-4 ">
                  <div className="space-y-2 h-[600px] overflow-auto">
                     {
                        images?.map((image, index) =>
                           <div key={index} className="aspect-square" onClick={() => setCurrentImage(image)}>
                              <Image src={image} width={600} height={850} alt="" className="w-full h-full object-cover" />
                           </div>
                        )
                     }
                  </div>
               </div>
               <div className="w-10/12 aspect-[500/650]">
                  <Image src={currentImage} width={600} height={850} alt="" className="w-full h-full object-contain" />
               </div>
            </div>
         </div>
      </>
   )
}

export default ProductImage