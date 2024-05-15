'use client'
import { axiosInstance } from "@/config/axios";
import Image from "next/image";
import { useLayoutEffect, useState } from "react";

const Brands = () => {
   const [topBrands, setTopBrands] = useState({})
   useLayoutEffect(() => {
      getTopBrands()
   }, [])
   async function getTopBrands() {
      try {
         const { data } = await axiosInstance.get(`/advertisement/advertisementBySlug/ad03`)
         console.log('getTopBrands', data.advertisement)
         setTopBrands(data?.advertisement)
      }
      catch (error) {
         console.log(error)
      }
   }

   return (
      <div className="w-full bg-[#323232] text-white text-center space-y-10 p-12 rounded-xl">
         <div className="text-4xl font-bold">Top Brands Deal</div>
         <p className="text-base text-white font-normal font-lato">{topBrands?.tagline}</p>
         <ul className="w-full flex flex-nowrap items-center justify-center space-x-6">
            {
               topBrands?.images?.map((image, index) => (
                  <li key={index} className="bg-white inline-flex items-center justify-center p-3 w-44 h-20 rounded-md">
                     <Image src={image?.url} width={100} height={50} alt="" className="w-full h-auto max-h-full" />
                  </li>
               ))
            }
         </ul>
      </div>
   );
};

export default Brands;
