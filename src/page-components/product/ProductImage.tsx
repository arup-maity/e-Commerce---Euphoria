"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

const ProductImage = () => {
   const images = [
      "/img-28.png",
      "/img-27.png",
      "/img-26.png",
      "/img-28.png",
      "/img-27.png",
      "/img-26.png",
      "/img-28.png",
      "/img-27.png",
      "/img-26.png",
      "/img-28.png",
      "/img-27.png",
      "/img-26.png"
   ];

   const [currentImage, setCurrentImage] = useState(images[0]);
   const [translateY, setTranslateY] = useState<number>(0);
   const [imageWidth, setImageWidth] = useState<number>(100)
   const [imageHeight, setImageHeight] = useState<number>(100)

   const imageCount = images.length;
   const roundCount = Math.floor(imageCount / 5) * 5
   const restCount = imageCount - roundCount
   const slideLength = imageCount * imageHeight

   console.log('translateY', translateY)
   console.log('slideLength', slideLength)
   console.log('imageCount', imageCount)
   console.log('roundCount', roundCount)
   console.log('restCount', restCount)


   function handleNextClick() {
      if (translateY >= (-slideLength + 500)) {
         setTranslateY((prev) => prev - 500)
      }
   };

   const handlePrevClick = () => {
      if (translateY < 0) {
         setTranslateY((prev) => prev + 500)
      }
   };

   return (
      <>
         <div className="w-full">
            <div className="flex flex-wrap">
               <div className="w-2/12">
                  <div className="space-y-2">

                     {/*  */}
                     <div className="">
                        <div className="border flex justify-center">
                           <RiArrowUpSLine
                              size={35}
                              onClick={handlePrevClick}
                           />
                        </div>
                        <div className="h-[600px] overflow-hidden">
                           <div
                              className=" transition-transform duration-500 ease-in-out"
                              style={{ transform: `translateY(${translateY}px)` }}
                           >
                              {images?.map((image, index) => (
                                 <div
                                    key={index}
                                    className="w-[100px] h-[100px] p-2"
                                    onClick={() => setCurrentImage(image)}
                                 >
                                    <Image
                                       src={image}
                                       width={282}
                                       height={370}
                                       alt=""
                                       className="w-full h-full object-cover"
                                    />
                                 </div>
                              ))}
                           </div>
                        </div>
                        <div className="border flex justify-center">
                           <RiArrowDownSLine size={35} onClick={handleNextClick} />
                        </div>
                     </div>

                     {/*  */}
                  </div>
               </div>
               <div className="w-10/12 aspect-[500/650]">
                  <Image
                     src={currentImage}
                     width={600}
                     height={850}
                     alt=""
                     className="w-full h-full object-contain"
                  />
               </div>
            </div>
         </div>
      </>
   );
};

export default ProductImage;
